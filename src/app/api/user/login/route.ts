import { db } from "@/db";
import { users } from "@/db/schemas/schema";
import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";
import Redis from "ioredis";
import bcrypt from "bcrypt";
import { REDIS_MAX_AGE } from "@/utils/redis";

export const POST = async (req: NextRequest) => {

  // 環境変数の秘密鍵を取得
  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ message: "秘密鍵が設定されていません"}, { status: 409 });
  }

  const redisURL = process.env.REDIS_URL;
  if (!redisURL) {
    return NextResponse.json({ message: "Redisが設定されていません"}, { status: 409 });
  }

  // Redis クライアントの初期化
  const redisClient = new Redis(redisURL);

  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "メールアドレスとパスワードを入力してください。" }, { status: 400 });
    }

    const userData = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!userData) {
      return NextResponse.json(
        { message: "メールアドレスもしくはパスワードが違います。" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "パスワードが違います。" },
        { status: 401 }
      );
    }

    // セッション情報を Redis に保存（手動で管理）
    const sessionId = `session:${userData.id}`;
    await redisClient.set(sessionId, JSON.stringify(userData), "EX", REDIS_MAX_AGE);

    return NextResponse.json({ message: "ログインが成功しました。" }, { status: 200 });
  } catch (error) {
    console.error("エラー発生:", error);
    return NextResponse.json({ message: "サーバーエラーが発生しました。" }, { status: 500 });
  }
};

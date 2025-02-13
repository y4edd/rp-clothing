import { db } from "@/db";
import { users } from "@/db/schemas/schema";
import { COOKIE_MAX_AGE } from "@/utils/cookie";
import { REDIS_MAX_AGE } from "@/utils/redis";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import Redis from "ioredis";
import type { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { type NextRequest, NextResponse } from "next/server";
import { v5 as uuidv5 } from "uuid";
import { v4 as uuidv4 } from "uuid";

export const POST = async (req: NextRequest) => {
  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ message: "秘密鍵が設定されていません" }, { status: 409 });
  }

  const redisURL = process.env.REDIS_URL;
  if (!redisURL) {
    return NextResponse.json({ message: "Redisが設定されていません" }, { status: 409 });
  }

  const redisClient = new Redis(redisURL);

  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "メールアドレスとパスワードを入力してください。" },
        { status: 400 },
      );
    }

    const userData = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!userData) {
      return NextResponse.json(
        { message: "メールアドレスもしくはパスワードが違います。" },
        { status: 401 },
      );
    }

    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch) {
      return NextResponse.json({ message: "パスワードが違います。" }, { status: 401 });
    }

    // セッションIDを生成（userのIDをそのまま使用）
    const sessionId = userData.id.toString();
    // 事前に生成（アプリ起動時に固定）
    const NAMESPACE = uuidv4();
    // 第二引数はuuidの任意の名前空間です
    const uniqueSessionId = uuidv5(sessionId, NAMESPACE);
    await redisClient.set(uniqueSessionId, JSON.stringify(userData), "EX", REDIS_MAX_AGE);

    // クッキー設定（httpOnlyを有効化）
    const cookieOpt: Partial<ResponseCookie> = {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    };

    const response = NextResponse.json({ message: "ログインが成功しました。" }, { status: 200 });

    // クライアントのcookieにセッションIDを保存
    // MEMO: cookieに保存するのはカート情報、閲覧履歴のみ。ユーザー情報は保存しない
    response.cookies.set("sessionId", uniqueSessionId, cookieOpt);

    return response;
  } catch (error) {
    console.error("エラー発生:", error);
    return NextResponse.json({ message: "サーバーエラーが発生しました。" }, { status: 500 });
  }
};

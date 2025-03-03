import { db } from "@/db";
import { users } from "@/db/schemas/schema";
import { redisClient } from "@/lib/redis/redis";
import { cookieOpt } from "@/utils/cookie";
import { REDIS_MAX_AGE } from "@/utils/redis";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export const POST = async (req: NextRequest) => {
  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ message: "秘密鍵が設定されていません" }, { status: 409 });
  }

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

    // クッキーから既存の sessionId を取得
    const existingSessionId = req.cookies.get("sessionId")?.value;
    let sessionId = existingSessionId;

    // 既存の sessionId がある場合、Redis内のcartItemはcartテーブルにPOSTし、
    // RedisにはuserIdだけが保持される
    if (sessionId) {
      const redis = await redisClient.get(`sessionId:${sessionId}`);
      console.log("redis", redis);
    } else {
      // 新規に sessionId を生成し、Cookie & Redis に保存
      sessionId = uuidv4();
      await redisClient.set(
        `sessionId:${sessionId}`,
        JSON.stringify({ userId: userData.id }),
        "EX",
        REDIS_MAX_AGE,
      );
    }

    const response = NextResponse.json({ message: "ログインに成功しました" }, { status: 200 });
    response.cookies.set("sessionId", sessionId, cookieOpt);

    return response;
  } catch (error) {
    console.error("エラー発生:", error);
    return NextResponse.json({ message: "サーバーエラーが発生しました。" }, { status: 500 });
  }
};

import { db } from "@/db";
import { users } from "@/db/schemas/schema";
import { COOKIE_MAX_AGE } from "@/utils/cookie";
import { REDIS_MAX_AGE } from "@/utils/redis";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import Redis from "ioredis";
import type { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { type NextRequest, NextResponse } from "next/server";

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
    await redisClient.set(sessionId, JSON.stringify(userData), "EX", REDIS_MAX_AGE);

    // クッキー設定（httpOnlyを有効化）
    const cookieOpt: Partial<ResponseCookie> = {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    };

    const response = NextResponse.json({ message: "ログインが成功しました。" }, { status: 200 });

    // クライアントのクッキーにセッションIDを保存
    response.cookies.set("sessionId", sessionId, cookieOpt);

    return response;
  } catch (error) {
    console.error("エラー発生:", error);
    return NextResponse.json({ message: "サーバーエラーが発生しました。" }, { status: 500 });
  }
};

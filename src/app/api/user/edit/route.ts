import { db } from "@/db";
import { users } from "@/db/schemas/schema";
import { redisClient } from "@/lib/redis/redis";
import bcryptjs from "bcryptjs";
import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";

export const PATCH = async (request: NextRequest) => {
  try {
    // cookieからsessionIdを取得し、
    // sessionIdをもとにredisからuserIdを取得
    const sessionId = request.cookies.get("sessionId")?.value;

    if (!sessionId) {
      return NextResponse.json({ message: "セッションエラーが発生しました" }, { status: 401 });
    }

    const userIdJason = await redisClient.get(`sessionId:${sessionId}`);
    if (!userIdJason) {
      return NextResponse.json({ message: "ユーザーの認証に失敗しました" }, { status: 401 });
    }

    const userId = JSON.parse(userIdJason).userId;

    const data = await request.json();
    const { name, email, password } = data;

    if (!data) {
      return NextResponse.json({ message: "編集用のデータがありません" }, { status: 401 });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    // userIdを元に対象のデータを更新する
    await db
      .update(users)
      .set({
        name: name,
        email: email,
        password: hashedPassword,
      })
      .where(eq(users.id, userId));

    return NextResponse.json({ message: "ユーザー情報の編集に成功しました" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました" }, { status: 500 });
  }
};

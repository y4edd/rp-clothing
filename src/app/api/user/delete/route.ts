import { db } from "@/db";
import { users } from "@/db/schemas/schema";
import { redisClient } from "@/lib/redis/redis";
import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";

export const DELETE = async (request: NextRequest) => {
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

  if (!sessionId) {
    return NextResponse.json({ message: "ログインしていません" }, { status: 401 });
  }

  try {
    // ユーザーをDBより取得
    const user = await db.query.users.findFirst({
      where: eq(users.id, userId),
    });

    if (!user) {
      return NextResponse.json({ message: "ユーザーの検証に失敗しました。" }, { status: 401 });
    }

    await db.delete(users).where(eq(users.id, userId));

    const response = NextResponse.json(
      { message: "アカウントの削除に成功しました" },
      { status: 200 },
    );

    await redisClient.del(`sessionId:${sessionId}`);
    response.cookies.delete("sessionId");

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました" }, { status: 500 });
  }
};

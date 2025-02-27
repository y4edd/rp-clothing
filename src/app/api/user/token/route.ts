import { redisClient } from "@/lib/redis/redis";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // サーバー側で HttpOnly Cookie を取得
    const cookieStore = await cookies();
    const sessionId = cookieStore.get("sessionId")?.value;

    if (!sessionId) {
      return NextResponse.json({ message: "認証に失敗しました" }, { status: 401 });
    }

    // Redis から userId を取得
    const userIdJson = await redisClient.get(`sessionId:${sessionId}`);
    if (!userIdJson) {
      return NextResponse.json({ message: "ユーザー情報がありません" }, { status: 404 });
    }

    const { userId } = JSON.parse(userIdJson);
    return NextResponse.json({ userId });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "サーバーエラーが発生しました" }, { status: 500 });
  }
};

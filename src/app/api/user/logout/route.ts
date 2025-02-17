import Redis from "ioredis";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const redisURL = process.env.REDIS_URL;
  if (!redisURL) {
    return NextResponse.json({ message: "Redis が設定されていません" }, { status: 500 });
  }

  const redisClient = new Redis(redisURL);
  const cookieStore = await cookies();

  try {
    // クライアントのセッションIDを取得
    const sessionId = req.cookies.get("sessionId");

    if (!sessionId) {
      return NextResponse.json({ message: "ログインしていません" }, { status: 401 });
    }
    // Redis からセッションを削除
    await redisClient.del(`session:${sessionId}`);

    const response = NextResponse.json({ message: "ログアウトしました" }, { status: 200 });
    // Cookie を削除
    cookieStore.delete("sessionId");

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました" }, { status: 500 });
  }
};

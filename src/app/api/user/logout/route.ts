import { NextRequest, NextResponse } from "next/server";
import Redis from "ioredis";

export const POST = async (req: NextRequest) => {
  const redisURL = process.env.REDIS_URL;
  if (!redisURL) {
    return NextResponse.json({ message: "Redis が設定されていません" }, { status: 500 });
  }

  const redisClient = new Redis(redisURL);

  try {
    // クライアントのセッションIDを取得
    const sessionId = req.cookies.get("sessionId");
    if (!sessionId) {
      return NextResponse.json({ message: "ログインしていません" }, { status: 401 });
    }
     // Redis からセッションを削除
    await redisClient.del(`session:${sessionId}`);

    // クライアントの Cookie を削除
    const response = NextResponse.json({ message: "ログアウトしました" }, { status: 200 });
    // Cookie を無効化
    response.cookies.set("sessionId", "", { expires: new Date(0) });

    return response;
  } catch (error) {
    console.error("ログアウトエラー:", error);
    return NextResponse.json({ message: "サーバーエラーが発生しました" }, { status: 500 });
  }
};

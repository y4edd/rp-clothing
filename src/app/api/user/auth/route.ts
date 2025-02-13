import { type NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const sessionId = req.cookies.get("sessionId");

    if (!sessionId) {
      return NextResponse.json({ message: "ログインしていません" }, { status: 401 });
    }
    return NextResponse.json( sessionId.value );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました" }, { status: 500 });
  }
};

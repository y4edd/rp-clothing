import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// クライアントサイドにて、cookieからトークンを取得するために実装
export const GET = async() => {
  const cookieStore = await cookies();
  const token = cookieStore.get("sessionId");

  if (!token) {
    return NextResponse.json({ token: null, message: "認証に失敗しました" }, { status: 401 });
  }
  const sessionId = token.value;

  return NextResponse.json({ sessionId });
}

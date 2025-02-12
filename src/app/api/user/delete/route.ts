import { db } from "@/db";
import { users } from "@/db/schemas/schema";
import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";

export const DELETE = async (request: NextRequest) => {
  const sessionId = request.cookies.get("sessionId");

  if (!sessionId) {
    return NextResponse.json({ message: "ログインしていません" }, { status: 401 });
  }
  try {
    // Number型にし、DB検索ができるようにする
    const userId = Number(sessionId.value);

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

    response.cookies.delete("sessionId");
    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました" }, { status: 500 });
  }
};

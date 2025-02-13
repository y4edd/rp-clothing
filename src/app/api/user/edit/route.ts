import { db } from "@/db";
import { users } from "@/db/schemas/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async(request: NextRequest) => {
  try{
    const sessionId = request.cookies.get("sessionId");

    if (!sessionId) {
      return NextResponse.json({ message: "ログインしていません" }, { status: 401 });
    }

    const userId = Number(sessionId.value);

    const data = await request.json();
    const { name, email, password } = data;

    if(!data) {
      return NextResponse.json({ message: "編集用のデータがありません" }, { status: 401 });
    }

    // userIdを元に対象のデータを持ってくる
    await db
      .update(users)
      .set({
        name: name,
        email: email,
        password: password,
        updated_at: new Date(),
      })
      .where(
        eq(users.id, userId),
      );
    return NextResponse.json({ message: "ユーザー情報の編集に成功しました"}, { status: 200 });
  } catch(error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました" }, { status: 500 });
  }
};

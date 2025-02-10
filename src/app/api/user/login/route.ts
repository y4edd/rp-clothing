import { db } from "@/db";
import { users } from "@/db/schemas/schema";
import { type NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { email, password } = body;
  try {
    if (!email || !password) {
      NextResponse.json({ message: "未入力です。" }, { status: 400 });
    }

    const selectEmail = await db.selectDistinct(email).from(users);

    console.log(selectEmail, "77722");

    if (!selectEmail) console.log(selectEmail, "33");

    if (!selectEmail) {
      NextResponse.json(
        { message: "メースアドレスもしくはパスワードが違います。" },
        { status: 409 },
      );
    }

    // ここにcookieの処理をかく！

    return NextResponse.json({ message: "ログインが成功しました。" }, { status: 200 });
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ message: "サーバーエラーが発生しました。" }, { status: 500 });
  }
};

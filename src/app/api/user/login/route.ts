import { db } from "@/db";
import { users } from "@/db/schemas/schema";
import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { email, password } = body;
  const bcrypt = require("bcrypt");

  try {
    if (!email || !password) {
      NextResponse.json({ message: "未入力です。" }, { status: 400 });
    }

    const userData = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!userData) {
      return NextResponse.json(
        { message: "メースアドレスもしくはパスワードが違います。" },
        { status: 409 },
      );
    }

    // パスワードの確認
    const isMatch = bcrypt.compare(password, userData.password);

    // ここにcookieの処理をかく！

    return NextResponse.json({ message: "ログインが成功しました。" }, { status: 200 });
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ message: "サーバーエラーが発生しました。" }, { status: 500 });
  }
};

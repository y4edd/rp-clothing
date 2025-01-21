import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { db } from "@/db";
import { users } from "@/db/schemas/schema";
import { eq } from "drizzle-orm";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { name, email, birthday, password, confirmPassword } = body;
  const newBirthday = new Date(birthday);
  try {
    if (!name || !email || !birthday || !password || !confirmPassword) {
      NextResponse.json({ message: "未入力です。" }, { status: 400 });
    }

    const selectEmail = await db
      .select()
      .from(users)
      .where(eq(users.email, body.email));

    if (selectEmail.length) {
      return NextResponse.json(
        { message: "このemailは重複しています。" },
        { status: 409 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.insert(users).values({
      name,
      email,
      password: hashedPassword,
      birthday: newBirthday.toISOString(),
    });

    return NextResponse.json(
      { message: "会員登録が成功しました。" },
      { status: 200 }
    );
  } catch (error) {
    console.error({ error });
    return NextResponse.json(
      { message: "サーバーエラーが発生しました。" },
      { status: 500 }
    );
  }
};

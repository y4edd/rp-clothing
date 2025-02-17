import { db } from "@/db";
import { users } from "@/db/schemas/schema";
import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const userId = await request.json();

  try {
    const userData = await db
      .select({
        name: users.name,
        email: users.email,
        birthday: users.birthday,
      })
      .from(users)
      .where(eq(users.id, userId));
    if (!userData) {
      return NextResponse.json({ message: "ユーザーが見つかりませんでした" }, { status: 404 });
    }
    return NextResponse.json(userData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました" }, { status: 500 });
  }
};

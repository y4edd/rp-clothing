import { db } from "@/db";
import { users } from "@/db/schemas/schema";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const cookiesStore = await cookies();
    if (!cookiesStore) {
      return NextResponse.json({ message: "セッションエラーが発生しました" }, { status: 401 });
    }
    const userIdString = cookiesStore.get("usersId");
    if (!userIdString) {
      return NextResponse.json({ message: "ユーザーIDの取得処理に失敗しました" });
    }
    const userId = Number(userIdString.value);
    if (!userId) {
      return NextResponse.json({ message: "ユーザーIDの取得処理に失敗しました" });
    }

    const birthdayResult = await db.select().from(users).where(eq(users.id, userId));

    const birthday = new Date(birthdayResult[0].birthday);
    const today = new Date();

    const isBirthday =
      birthday.getMonth() === today.getMonth() && birthday.getDate() === today.getDate();

    return NextResponse.json({ isBirthday }, { status: 200 });
  } catch (error) {
    console.error("エラー", error);
    return NextResponse.json({ message: "エラーが発生しました" }, { status: 500 });
  }
};

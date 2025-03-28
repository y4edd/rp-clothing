import { db } from "@/db";
import { purchaseHistory } from "@/db/schemas/schema";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  const cookiesStore = await cookies();

  try {
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

    const purchasedHistories = await db
      .select()
      .from(purchaseHistory)
      .where(eq(purchaseHistory.usersId, userId))
      .orderBy(purchaseHistory.createdAt)
      .limit(5);

    return NextResponse.json({ purchasedHistories });
  } catch (error) {
    console.error("エラー", error);
    return NextResponse.json({ message: "エラーが発生しました" }, { status: 500 });
  }
};

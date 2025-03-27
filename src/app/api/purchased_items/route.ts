import { db } from "@/db";
import { purchaseHistory } from "@/db/schemas/schema";
import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const userIdString = req.headers.get("Cookie");
  try {
    if (!userIdString) {
      return NextResponse.json({ message: "セッションエラーが発生しました" }, { status: 401 });
    }
    const userId = Number(userIdString.split("=")[1]);

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

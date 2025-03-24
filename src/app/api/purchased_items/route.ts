import { db } from "@/db";
import { purchase_history } from "@/db/schemas/schema";
import { checkAuth } from "@/utils/checkAuth";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const request = await req.json();
  const userId = request.userId;
  const itemCode = request.itemCode;

  try {
    const userIdString = await checkAuth();
    const userId = Number(userIdString);

    if(!userId) {
      return NextResponse.json({ message: "ユーザーIDの取得処理に失敗しました"})
    }

    const purchasedHistory = await db
      .select()
      .from(purchase_history)
      .where(eq(purchase_history.users_id, userId))
      .orderBy(purchase_history.date)
      .limit(5);

  } catch (error) {
    
  }
}
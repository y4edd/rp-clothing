import { db } from "@/db";
import { purchase_history } from "@/db/schemas/schema";
import { checkAuth } from "@/utils/checkAuth";
import axios from "axios";
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

    const purchasedHistories = await db
      .select()
      .from(purchase_history)
      .where(eq(purchase_history.users_id, userId))
      .orderBy(purchase_history.date)
      .limit(5);

    const itemDetails = await Promise.all(
      purchasedHistories.map(async (purchaseHistory,index) => {
        try {
          const response = await axios.get(
            "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601",
            {
              params: {
                applicationId: process.env.RAKUTEN_API_ID,
                itemCode: purchaseHistory.
              }
            }
          )
        } catch (error) {
          
        }
      })
    )
  } catch (error) {
    
  }
}
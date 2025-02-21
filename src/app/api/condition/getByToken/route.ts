import { db } from "@/db";
import { search_conditions } from "@/db/schemas/schema";
import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";

// 検索条件を取得する(リクエストでuser_idは受け取る必要がある)
export const POST = async (request: NextRequest) => {
  const userId = await request.json();
  try {
    const response = await db
      .select({
        searchConditionId: search_conditions.id,
        conditionName: search_conditions.condition_name,
        minPrice: search_conditions.price_min,
        maxPrice: search_conditions.price_max,
        selectedCategory: search_conditions.category,
        keyWord: search_conditions.word,
      })
      .from(search_conditions)
      .where(eq(search_conditions.users_id, userId));
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました。" }, { status: 500 });
  }
};

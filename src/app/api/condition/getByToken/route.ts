import { db } from "@/db";
import { searchConditions } from "@/db/schemas/schema";
import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";

// 検索条件を取得する(リクエストでuser_idは受け取る必要がある)
export const POST = async (request: NextRequest) => {
  const userId = await request.json();
  try {
    const response = await db
      .select({
        searchConditionId: searchConditions.id,
        conditionName: searchConditions.conditionName,
        minPrice: searchConditions.priceMin,
        maxPrice: searchConditions.priceMax,
        selectedCategory: searchConditions.category,
        keyWord: searchConditions.word,
      })
      .from(searchConditions)
      .where(eq(searchConditions.usersId, userId));
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました。" }, { status: 500 });
  }
};

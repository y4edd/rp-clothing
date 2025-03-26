import { db } from "@/db";
import { favoriteShop } from "@/db/schemas/schema";
import { checkAuth } from "@/utils/checkAuth";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ shopCode: string }> },
) => {
  const userId = await checkAuth();
  const { shopCode } = await params;

  try{
    const favShop = await db.select().from(favoriteShop).where(
      and(
        eq(favoriteShop.usersId, userId),
        eq(favoriteShop.shopCode, shopCode),
      )
    );
    if(!favShop.length) {
      return NextResponse.json({ isFav: false}, { status: 200});
    }

    return NextResponse.json({ isFav: true }, { status: 200});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "エラーが発生しました"}, { status: 500 });
  }
}
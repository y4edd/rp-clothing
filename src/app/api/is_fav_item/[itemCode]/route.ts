import { db } from "@/db";
import { favoriteItem } from "@/db/schemas/schema";
import { checkAuth } from "@/utils/checkAuth";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ itemCode: string }> },
) => {
  const userId = await checkAuth();
  const { itemCode } = await params;

  try{
    const favItem = await db.select().from(favoriteItem).where(
      and(
        eq(favoriteItem.usersId, userId),
        eq(favoriteItem.itemCode, itemCode),
      )
    );
    if(!favItem.length) {
      return NextResponse.json({ isFav: false}, { status: 200});
    }

    return NextResponse.json({ isFav: true }, { status: 200});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "エラーが発生しました"}, { status: 500 });
  }
}
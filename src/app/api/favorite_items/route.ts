import { db } from "@/db";
import { favoriteItem } from "@/db/schemas/schema";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(request: NextRequest) => {
  const res = await request.json();
  const userId = res.userId;
  const itemCode = res.itemCode;
  const numUserId = Number(userId);

  if(!userId) {
    return NextResponse.json({ message: "ログインユーザー限定機能です。"}, { status: 403 });
  }

  try {
    // DB処理を記載
    await db
      .insert(favoriteItem)
      .values({
        itemCode: itemCode,
        usersId: numUserId
      })
    ;
    return NextResponse.json({message: "お気に入りアイテムが登録されました"}, { status: 200 });
  } catch(error) {
    console.error(error);
    return NextResponse.json({message: "サーバーエラーが発生しました"}, { status: 500 });
  }
};

export const DELETE = async(request: NextRequest) => {
  const res = await request.json();
  const userId = res.userId;
  const itemCode = res.itemCode;
  const numUserId = Number(userId);

  if(!userId) {
    return NextResponse.json({ message: "ログインユーザー限定機能です。"}, { status: 403 });
  }

  try {
    // DB処理を記載
    await db
      .delete(favoriteItem)
      .where(
        and(
          eq(
            favoriteItem.usersId, userId
          ),
          eq(favoriteItem.itemCode, itemCode)
        )
      )
    ;

    return NextResponse.json({message: "お気に入りアイテムの削除に成功しました"}, { status: 200 });
  } catch(error) {
    console.error(error);
    return NextResponse.json({message: "サーバーエラーが発生しました"}, { status: 500 });
  }
}
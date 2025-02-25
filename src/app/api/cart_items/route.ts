import { db } from "@/db";
import { cart } from "@/db/schemas/schema";
import { checkAuth } from "@/utils/chechAuth";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const userId = await checkAuth();
  try{
    if(!userId){
      return NextResponse.json({message: "ユーザーIDが取得できませんでした。"}, {status: 400});
    }
    // ユーザーIdを元にカート情報を取得
    const cartItems = await db.select().from(cart).where(eq(cart.users_id, userId));
    // アイテムコードをもとに楽天APIより商品情報を取得
    return NextResponse.json({cartItems}, {status: 200});
  }catch(error){
    console.error(error);
    return NextResponse.json({message: "データを取得できませんでした。"}, {status: 400});
  }
}

export const POST = async (request: NextRequest) => {
  const userId = await checkAuth();
  try{
    if(!userId){
      return NextResponse.json({message: "ユーザーIDが取得できませんでした。"}, {status: 400});
    }
    const itemCode = await request.text();
    // カートに商品を追加
    await db.insert(cart).values({users_id: userId, item_code: itemCode}).execute();
    return NextResponse.json({message: "商品をカートに追加しました。"}, {status: 200});
  }catch(error){
    console.error(error);
    return NextResponse.json({message: "商品をカートに追加できませんでした。"}, {status: 400});
  }
}
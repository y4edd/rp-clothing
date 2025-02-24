import { db } from "@/db";
import { cart } from "@/db/schemas/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const POST = async (request: NextResponse) => {
  try{
    // リクエストボディからユーザーIDを取得
    const userId = await request.json();
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
import { db } from "@/db";
import { cart, purchaseHistory } from "@/db/schemas/schema";
import { getCartItems } from "@/utils/apiFunc";
import { checkAuth } from "@/utils/checkAuth";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(request: NextRequest) => {
  const userIdString = await checkAuth();
  const userId = Number(userIdString);
  const { searchParams } = new URL(request.url);
  const paymentIntent = searchParams.get("payment_intent");

  // FIXME: 誕生日特典機能のため、ユーザー情報を
  // 取得するなどして今日が誕生日かどうかを判定
  // 誕生日でなければis_birthday_sale_useにはfalseが入るように実装する

  if(!userId) {
    return NextResponse.json({message: "ユーザー確認に失敗しました"}, { status: 401 });
  }

  if(!paymentIntent) {
    return NextResponse.json({message: "支払いに失敗しました"}, { status: 400 });
  }

  try{
    // purchasedテーブルにPOSTするための処理を実装
    // ユーザーIDよりカートにある商品情報を取得
    const items = await getCartItems(userIdString);
  
    // カートの商品をpurchased_historyテーブルに追加し、
    // cartテーブルから削除するまでの処理を一つの塊（トランザクション）とする
    await db.transaction(async (tx) => {
      for(const item of items.items) {
        await tx.insert(purchaseHistory).values({
          usersId: userId,
          itemPrice: item.itemPrice,
          itemName: item.itemName,
          itemImage: item.itemImage,
          itemShop: item.shopName,
          paymentIntent: paymentIntent,
          isBirthdaySaleUse: false,
          quantity: item.quantity,
        })
      }
      // カートの削除処理 (トランザクション内)
      const isDeleted = await tx.delete(cart).where(eq(cart.usersId, userId));

      if (!isDeleted || (isDeleted.rowCount !== undefined && isDeleted.rowCount === 0)) {
        throw new Error("カート情報の削除に失敗しました");
      }
    })

    return NextResponse.redirect("http://localhost:3000/cart/payment/success");
  } catch(error) {
    console.error(error);
    // ロールバックを確実にする
    return NextResponse.json({ message: "サーバーエラーが発生しました"}, { status: 500});
  }
};
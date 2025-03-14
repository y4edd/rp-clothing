import { db } from "@/db";
import { cart, purchase_history } from "@/db/schemas/schema";
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

    // トランザクションになる
    // やらなきゃいけないこと
    // 非推奨となること
    // mapメソッドの中でSQLを実行すること

    // DB編集
    // item_priceをintegerに、dateは削除しpaymentIntenを追加
  
    await db.transaction(async (tx) => {
      for(const item of items.items) {
        await tx.insert(purchase_history).values({
          users_id: userId,
          item_price: item.itemPrice,
          item_name: item.itemName,
          item_image: item.itemImage,
          item_shop: item.itemShop,
          is_birthday_sale_use: false,
          // paymentも保存しておく
          quantity: item.quantity,
        })
      }
    })

    // DELETEメソッドを使うべきだがリダイレクトのためにGETを使用
    const isDeleted =await db.delete(cart).where(eq(cart.users_id, userId));

    if (isDeleted.rowCount === 0) {
      return NextResponse.json({ message: "カート情報の削除に失敗しました"}, { status: 500 });
    }

    return NextResponse.redirect("http://localhost:3000/cart/payment/success");
  } catch(error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました"}, { status: 500});
  }
};
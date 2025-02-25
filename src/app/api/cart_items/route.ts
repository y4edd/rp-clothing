import { db } from "@/db";
import { cart } from "@/db/schemas/schema";
import { checkAuth } from "@/utils/chechAuth";
import axios from "axios";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const userIdString = request.headers.get("Cookie");

  if (!userIdString) {
    return NextResponse.json({ message: "ユーザーIDが取得できませんでした。" }, { status: 400 });
  }

  const userId = userIdString.split('=')[1];

  if (!userId) {
    return NextResponse.json({ message: "ユーザーIDが取得できませんでした。" }, { status: 400 });
  }

  try {
    // ユーザーIdを元にカート情報を取得
    const cartItemCodes = await db
      .select({ itemCode: cart.item_code })
      .from(cart)
      .where(eq(cart.users_id, userId));

    let item: any[] = [];
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    const applicationId = process.env.RAKUTEN_API_ID;

    // Promise.allで全てのAPIリクエストを待機
    await Promise.all(
      cartItemCodes.map(async (cartItemCode, index) => {
        // itemCodeをデコードし、余計な「""」を排除
        const itemCode = decodeURIComponent(cartItemCode.itemCode).replace(/^"|"$/g, '');

        try {
           // 楽天APIの制約により、リクエストを1秒遅延させる
          await delay(index * 1000);

          const response = await axios.get(
            "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601",
            {
              params: {
                applicationId: applicationId,
                itemCode: itemCode,
                availability: 1,
                elements: "itemName,itemCode,mediumImageUrls,itemPrice,shopName,shopCode,shopUrl",
              },
            }
          );

          // レスポンスがある場合、商品情報を取得
          if (response.data.Items && response.data.Items.length > 0) {
            const itemData = response.data.Items[0].Item;

            const formatItem = {
              itemName: itemData.itemName,
              itemCode: itemData.itemCode,
              itemPrice: itemData.itemPrice,
              itemImage: itemData.mediumImageUrls[0]?.imageUrl.replace("128x128", "250x250"),
              shopCode: itemData.shopCode,
              shopName: itemData.shopName,
              shopUrl: itemData.shopUrl,
            };

            item.push(formatItem);
            return formatItem;
          } else {
            console.error(`下記アイテムコードに該当する商品は存在しません: ${itemCode}`);
          }
        } catch (error: any) {
          console.error(`アイテムの取得に失敗しました "${itemCode}":`, error.response?.data || error.message);
        }
      })
    );

    return NextResponse.json({ items: item }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "データを取得できませんでした。" }, { status: 400 });
  }
};

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
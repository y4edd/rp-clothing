import { db } from "@/db";
import { cart } from "@/db/schemas/schema";
import { checkAuth } from "@/utils/chechAuth";
import axios from "axios";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const userIdString = request.headers.get("Cookie");

  if (!userIdString) {
    return NextResponse.json({ message: "ユーザーIDが取得できませんでした。" }, { status: 400 });
  }

  const userId = Number(userIdString.split('=')[1]);

  if (!userId) {
    return NextResponse.json({ message: "ユーザーIDが取得できませんでした。" }, { status: 400 });
  }

  try {
    // ユーザーIdを元にカート情報を取得
    const cartItems = await db
      .select({ itemCode: cart.item_code, quantity: cart.quantity })
      .from(cart)
      .where(eq(cart.users_id, userId))
    ;

    // cartItemCodesという配列を作らなきゃいけない。
    // formatItemに対し、各アイテムの量を追加する必要がある。
    let cartItemCodes:string[] = [];
    cartItems.map((cartItem) => {
      cartItemCodes.push(cartItem.itemCode);
    })

    let item: any[] = [];
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    const applicationId = process.env.RAKUTEN_API_ID;

    // Promise.allで全てのAPIリクエストを待機
    await Promise.all(
      cartItemCodes.map(async (cartItemCode, index) => {
        // itemCodeをデコードし、余計な「""」を排除
        const itemCode = decodeURIComponent(cartItemCode).replace(/^"|"$/g, '');

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
              // カートに追加された商品の数量を取得
              quantity: cartItems[index].quantity,
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

    // itemが空の配列の場合、nullを返し別のコンポーネントが表示されるように
    if(item.length === 0) {
      return NextResponse.json(null, { status: 200 });
    }

    return NextResponse.json({ items: item }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "データを取得できませんでした。" }, { status: 400 });
  }
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  const userIdString = await checkAuth();
  const userId = Number(userIdString);
  try{
    if(!userId){
      return NextResponse.json({message: "ユーザーIDが取得できませんでした。"}, {status: 400});
    }
    const itemCode = req.itemCode;
    const decodedItemCode = decodeURIComponent(itemCode).replace(/^"|"$/g, '');
    const selectedQquantity = req.selectedQuantity;

    // カートに同じ商品があれば、数量を更新
    const cartItem = await db
      .select()
      .from(cart)
      .where(
        and(
          eq(cart.users_id, userId),
          eq(cart.item_code, decodedItemCode)
        )
      )
    ;

    if(cartItem) {
      await db
        .update(cart)
        .set({quantity: cartItem[0].quantity + selectedQquantity})
        .where(
          and(
            eq(cart.users_id, userId),
            eq(cart.item_code, decodedItemCode)
          )
        )
      ;
      return NextResponse.json({message: "商品をカートに追加しました。"}, {status: 200});
    }else {
      // カートに商品を追加
      await db.insert(cart).values({users_id: userId, item_code: decodedItemCode, quantity: selectedQquantity}).execute();
      return NextResponse.json({message: "商品をカートに追加しました。"}, {status: 200});
    }

  }catch(error){
    console.error(error);
    return NextResponse.json({message: "商品をカートに追加できませんでした。"}, {status: 400});
  }
}

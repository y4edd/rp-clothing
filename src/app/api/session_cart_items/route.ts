import { redisClient } from "@/lib/redis/redis";
import { CartItem, CartItemInRedis } from "@/types/cart_item/cart_item";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  // cookieからsessionIdを取得し、redisよりカート情報を取得する
  const sessionIdString = request.headers.get("Cookie");
  if(!sessionIdString) {
    return NextResponse.json({ message: "セッションなし。カートに商品は登録されていないようです"}, {status: 200});
  }
  const sessionId = sessionIdString.split("=")[1];
  const redis = await redisClient.get(
    `sessionId:${sessionId}`,
  );

  if(!redis) {
    return NextResponse.json({ message: "カートに商品は登録されていないようです"}, {status: 200});
  }

  const redisObj:CartItemInRedis = JSON.parse(redis);

  const delay = (ms: number) => new Promise((resolve) => setTimeout(
    resolve, ms))
  ;

  const applicationId = process.env.RAKUTEN_API_ID;

  try {

    const item: CartItem[] = [];
    await Promise.all(
      redisObj.map(async(cartItemCode, index) => {
        // itemCodeをデコードし、余計な「""」を排除
        const itemCode = decodeURIComponent(cartItemCode.cartItem).replace(/^"|"$/g, "");

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
            },
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
              quantity: redisObj[index].quantity,
            };

            item.push(formatItem);
            return formatItem;
          } else {
            console.error(`下記アイテムコードに該当する商品は存在しません: ${itemCode}`);
          }
        } catch (error) {
          console.error(`アイテムの取得に失敗しました "${itemCode}":`, error);
        }
      }),
    );

    // itemが空の配列の場合、nullを返し別のコンポーネントが表示されるように
    if (item.length === 0) {
      return NextResponse.json(null, { status: 200 });
    }

    return NextResponse.json({ items: item }, { status: 200 });
  } catch(error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました" },{ status: 500 });
  }
}
import { db } from "@/db";
import { favoriteItem } from "@/db/schemas/schema";
import { redisClient } from "@/lib/redis/redis";
import { FavItem } from "@/types/fav_item/fav_item";
import axios from "axios";
import { and, eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const res = await request.json();
  const userId = res.userId;
  const itemCode = res.itemCode;
  const decodedItemCode = decodeURIComponent(itemCode).replace(/^"|"$/g, "");
  const numUserId = Number(userId);

  if (!userId) {
    return NextResponse.json({ message: "ログインユーザー限定機能です。" }, { status: 403 });
  }

  try {
    // DB処理を記載
    await db.insert(favoriteItem).values({
      itemCode: decodedItemCode,
      usersId: numUserId,
    });
    return NextResponse.json({ message: "お気に入りアイテムが登録されました" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました" }, { status: 500 });
  }
};

export const DELETE = async (request: NextRequest) => {
  const res = await request.json();
  const userId = res.userId;
  const itemCode = res.itemCode;
  const decodedItemCode = decodeURIComponent(itemCode).replace(/^"|"$/g, "");
  const numUserId = Number(userId);

  if (!userId) {
    return NextResponse.json({ message: "ログインユーザー限定機能です。" }, { status: 403 });
  }

  try {
    // DB処理を記載
    await db
      .delete(favoriteItem)
      .where(and(eq(favoriteItem.usersId, numUserId), eq(favoriteItem.itemCode, decodedItemCode)))
    ;

    return NextResponse.json(
      { message: "お気に入りアイテムの削除に成功しました" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました" }, { status: 500 });
  }
};

export const GET = async (request: NextRequest) => {
  const sessionIdString = request.headers.get("Cookie");
  if (!sessionIdString) {
    return NextResponse.json(
      { message: "セッションなし。このページは表示できません" },
      { status: 401 },
    );
  }
  const sessionId = sessionIdString.split("=")[1];
  // sessionIdからredis内のuserId取得
  const userIdObj = await redisClient.get(`sessionId:${sessionId}`);
  if(!userIdObj) {
    return NextResponse.json({ message: "ユーザーIDの取得に失敗しました" }, { status: 401 });
  }
  const userId = JSON.parse(userIdObj).userId;

  try {
    // ユーザーIdを元にお気に入りアイテム情報を取得
    const favItems = await db
      .select({ itemCode: favoriteItem.itemCode })
      .from(favoriteItem)
      .where(eq(favoriteItem.usersId, userId))
    ;

    if (favItems.length === 0) {
      return NextResponse.json({ message: "お気に入りの商品はありませんでした。" }, { status: 200 });
    }

    // favItemCodesという配列を作らなきゃいけない。
    // formatItemに対し、各アイテムの量を追加。
    const favItemCodes: string[] = [];
    favItems.map((favItem) => {
      favItemCodes.push(favItem.itemCode);
    });

    const item: FavItem[] = [];
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    const applicationId = process.env.RAKUTEN_API_ID;

    // Promise.allで全てのAPIリクエストを待機
    await Promise.all(
      favItemCodes.map(async (favItemCode, index) => {
        // itemCodeをデコードし、余計な「""」を排除
        const itemCode = decodeURIComponent(favItemCode).replace(/^"|"$/g, "");

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
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "データを取得できませんでした。" }, { status: 500 });
  }
};

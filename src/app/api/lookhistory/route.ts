import { db } from "@/db";
import { look_history } from "@/db/schemas/schema";
import axios from "axios";
import { and, desc, eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const request = await req.json();
  const userId = request.userId;
  const itemCode = request.itemCode;

  try {
    //既存の履歴を取得(重複防止)
    const exitingHistory = await db
      .select()
      .from(look_history)
      .where(and(eq(look_history.users_id, userId), eq(look_history.item_code, itemCode)))
      .orderBy(desc(look_history.updated_at));

    //新規履歴を登録
    if (exitingHistory.length === 0) {
      await db.insert(look_history).values({
        users_id: userId,
        item_code: itemCode,
      });
    } else {
      //既存の履歴がある場合は更新
      await db
        .update(look_history)
        .set({ updated_at: new Date() })
        .where(and(eq(look_history.users_id, userId), eq(look_history.item_code, itemCode)));
    }
    return NextResponse.json({ message: "履歴を追加しました。" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "エラーが発生しました。" }, { status: 500 });
  }
};

// 取得できる
export const GET = async (req: NextRequest) => {
  try {
    const userIdString = req.headers.get("Cookie");
    if (!userIdString) {
      return NextResponse.json({ message: "セッションエラーが発生しました" }, { status: 401 });
    }
    const userId = Number(userIdString.split("=")[1]);

    if (!userId) {
      return NextResponse.json({ message: "ユーザーIDの取得処理に失敗しました" }, { status: 401 });
    }

    //履歴を取得する
    const histories = await db
      .select()
      .from(look_history)
      .where(eq(look_history.users_id, userId))
      .orderBy(look_history.created_at)
      .limit(10);

    // 遅延させるための関数
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    //商品情報を外部APIから取得する
    const itemDetails = await Promise.all(
      histories.map(async (history, index) => {
        await delay(index * 500); // 1秒ごとにAPIリクエストを送信
        try {
          const response = await axios.get(
            "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601",
            {
              params: {
                applicationId: process.env.RAKUTEN_API_ID,
                itemCode: decodeURIComponent(history.item_code), // item_codeを正しく渡す
                availability: 1, // 販売可能
                elements: "itemName,itemCode,mediumImageUrls,itemPrice",
              },
            },
          );

          // APIからの商品情報
          const itemInfo = response.data.Items[0]?.Item;
          return {
            ...history,
            itemInfo: itemInfo || null, // 商品情報が無い場合の処理
          };
        } catch (error) {
          console.error(error);
          return { ...history, itemInfo: null }; // エラー時は商品情報をnullに
        }
      }),
    );

    return NextResponse.json({ histories: itemDetails });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "エラーが発生しました。" }, { status: 500 });
  }
};

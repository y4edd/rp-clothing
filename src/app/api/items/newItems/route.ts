import baseAxios, { handleAxiosError } from "@/lib/axios/axios";
import type { ItemListModel } from "@/types/items/item";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (_: NextRequest) => {
  try {
    const response = baseAxios.get(
      "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601",
      {
        params: {
          applicationId: "1024122268543079137",
          genreId: "551177", //メンズファッション
          hits: 15, //15件のアイテム情報を取得
          sort: "-updateTimestamp", //商品更新日時順（降順）新着順
          imageFlag: 1, //商品画像がある商品
          availability: 1, //販売可能
        },
      }
    );

    const items: ItemListModel[] = (await response).data.Items;
    // 必要なデータのみを抽出
    const needDataItems = items.map(({ Item }) => ({
      itemName: Item.itemName,
      itemCode: Item.itemCode,
      imageUrl: Item.mediumImageUrls[0]?.imageUrl,
      itemPrice: Item.itemPrice,
    }));
    console.log(needDataItems);

    // 画像URLの末尾がサイズなので画像サイズを変更する関数
    const newItems = needDataItems.map((item) => ({
      ...item,
      imageUrl : item.imageUrl.replace("128x128", "250x250")
    }));
    console.log(newItems);
    return NextResponse.json({ items: newItems }, { status: 200 });
  } catch (error) {
    return handleAxiosError(error);
  }
};

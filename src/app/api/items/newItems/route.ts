import { handleAxiosError } from "@/lib/axios/axios";
import type { ItemListModel } from "@/types/item/item";
import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const response = await axios.get(
      "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601",
      {
        params: {
          applicationId: process.env.RAKUTEN_API_ID,
          genreId: "551177", //メンズファッション
          hits: 15, //15件のアイテム情報を取得
          sort: "-updateTimestamp", //商品更新日時順（降順）新着順
          imageFlag: 1, //商品画像がある商品
          availability: 1, //販売可能
          elements: "itemName,itemCode,mediumImageUrls,itemPrice",
        },
      },
    );

    const items: ItemListModel[] = response.data.Items;

    if (!items) {
      return NextResponse.json({ message: "データを取得できませんでした。" }, { status: 400 });
    }

    // mediumImageUrlsは配列で複数のパスが入っているため、一つだけを抽出する。
    // またパスの末尾が画像のサイズのためサイズを置き換える
    const newItems = items.map(({ Item }) => ({
      itemName: Item.itemName,
      itemCode: Item.itemCode,
      itemPrice: Item.itemPrice,
      imageUrl: Item.mediumImageUrls[0]?.imageUrl
      ? Item.mediumImageUrls[0]?.imageUrl.replace("128x128", "250x250")
      : null,
    }));

    return NextResponse.json({ items: newItems }, { status: 200 });
  } catch (error) {
    return handleAxiosError(error);
  }
};

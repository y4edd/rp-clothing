import { handleAxiosError } from "@/lib/axios/axios";
import type { ImageUrls } from "@/types/item/item";
import axios from "axios";
import { type NextRequest, NextResponse } from "next/server";

// 商品のリスト情報(Itemsの中の構造)
export type ItemListModel = {
  Item: RakutenItemDetailModel;
};

// 商品
type RakutenItemDetailModel = {
  itemName: string;
  itemCode: string;
  mediumImageUrls: ImageUrls[];
  itemPrice: string;
  itemCaption: string;
  shopName: string;
  shopCode: string;
  shopUrl: string;
};

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const itemCode = searchParams.get("itemCode");
    console.log(itemCode, "itemCode");

    const response = await axios.get(
      "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601",
      {
        params: {
          applicationId: process.env.RAKUTEN_API_ID,
          itemCode: itemCode,
          availability: 1, //販売可能
          elements:
            "itemName,itemCode,mediumImageUrls,itemPrice,itemCaption,shopName,shopCode,shopUrl",
        },
      }
    );
    // console.log(response, "ititi");
    const items: ItemListModel = response.data.Items[0];
    // console.log(items, "response");

    if (!items) {
      return NextResponse.json(
        { message: "データを取得できませんでした。" },
        { status: 400 }
      );
    }

    // // mediumImageUrlsは配列で複数のパスが入っているため、一つだけを抽出する。
    // // またパスの末尾が画像のサイズのためサイズを置き換える
    const formatItem = {
      itemName: items.Item.itemName,
      itemCode: items.Item.itemCode,
      itemPrice: items.Item.itemPrice,
      itemImage: items.Item.mediumImageUrls[0]?.imageUrl.replace(
        "128x128",
        "250x250"
      ),
      itemCaption: items.Item.itemCaption,
      shopCode: items.Item.shopCode,
      shopName: items.Item.shopName,
      shopUrl: items.Item.shopUrl,
    };
    // console.log(formatItem, "syuuseigo");

    return NextResponse.json({ item: formatItem }, { status: 200 });
  } catch (error) {
    return handleAxiosError(error);
  }
};

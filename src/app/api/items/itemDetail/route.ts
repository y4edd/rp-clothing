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
    const items: ItemListModel = response.data.Items[0];

    if (!items) {
      return NextResponse.json(
        { message: "データを取得できませんでした。" },
        { status: 400 }
      );
    }

    // itemCaptionを「。」で区切り新たに配列を生成する
    const newItemCaption: string[] = formatItemCaption(items.Item.itemCaption);

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
      itemCaption: newItemCaption,
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

// itemCaptionは改行がないかつ文字数が多いため配列型に成形する。
const formatItemCaption = (itemCaption: string) => {
  const LIMIT_LENGTH = 40; //検証する要素の文字制限
  const textArray: string[] = itemCaption.split("。");
  const formatArray: string[] = [];

  for (let i = 0; i < textArray.length; i++) {
    // textArrayの一つの要素の文字数がLIMIT_LENGTHより大きい場合はそのまま配列に挿入
    if (textArray[i].length > LIMIT_LENGTH) {
      formatArray.push(textArray[i]);
    } else {
      //LIMIT_LENGTHより小さい場合は次の要素と組み合わせて配列に挿入。
      formatArray.push(
        textArray[i] + "。".toString() + textArray[i + 1] + "。".toString()
      );
      i++; // 次の要素の検証をスキップさせる。
    }
  }
  return formatArray;
};

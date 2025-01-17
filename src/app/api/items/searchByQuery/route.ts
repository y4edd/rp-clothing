import { handleAxiosError } from "@/lib/axios/axios";
import type { CategoryProps, ItemListModel, Item } from "@/types/item/item";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const keyWord = searchParams.get("keyWord") || "";
    const category = searchParams.get("selectedCategory") || "";
    const minPrice = searchParams.get("minPrice") || "";
    const maxPrice = searchParams.get("maxPrice") || "";

    const appId = process.env.RAKUTEN_API_ID;

    if (!appId) {
      return NextResponse.json(
        { message: "RAKUTEN_API_IDが未設定です" },
        { status: 500 }
      );
    }

    // カテゴリに対応する genreId のマッピング
    const categoryGenreMap: Record<CategoryProps, string> = {
      tops: "110765",
      pants: "558846",
      suits: "100372",
      overalls: "558863",
      rainwear: "566031",
      coats: "558873",
    };

    // ベースのパラメータ
    const params: Record<string, string> = {
      applicationId: appId,
      format: "json",
      hits: "15",
      elements:
        "availability,catchcopy,creditCardFlag,genreId,imageFlag,itemCaption,itemCode,itemName,itemPrice,mediumImageUrls,postageFlag,shopCode,shopName,shopUrl,smallImageUrls,tagIds,taxFlag",
    };

    // カテゴリが存在する場合は genreId を追加
    params.genreId = categoryGenreMap[category as CategoryProps] || "551177";

    // キーワード、最低価格、最高価格を追加
    if (keyWord) params.keyword = keyWord;
    if (minPrice) params.minPrice = Number.parseInt(minPrice, 10).toString();
    if (maxPrice) params.maxPrice = Number.parseInt(maxPrice, 10).toString();

    // APIリクエスト
    const response = await axios.get(
      "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601",
      { params }
    );

    const items: ItemListModel[] = response.data.Items;

    if (!items) {
      return NextResponse.json(
        { message: "データを取得できませんでした。" },
        { status: 400 }
      );
    }

    // データを整形
    const newItems = items.map(({ Item }) => ({
      itemName: Item.itemName,
      itemCode: Item.itemCode,
      itemPrice: Item.itemPrice,
      itemImage: Item.mediumImageUrls[0]?.imageUrl
      ? Item.mediumImageUrls[0]?.imageUrl.replace("128x128", "250x250")
      : null,
    }));

    return NextResponse.json({ items: newItems }, { status: 200 });
  } catch (error) {
    return handleAxiosError(error);
  }
};

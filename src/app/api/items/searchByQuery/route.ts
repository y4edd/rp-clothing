import Category from "@/components/search/Category/Category";
import { NextRequest, NextResponse } from "next/server";

type Category =  "tops" | "pants" | "suits" | "overalls" | "rainwear" | "coats";

export const GET = async (req: NextRequest) => {

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

  // 基本のAPI URL
  let rakutenApiUrl =
    "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601";
  const params = new URLSearchParams({
    applicationId: appId,
    format: "json",
    hits: "15",
    elements:
      "availability,catchcopy,creditCardFlag,genreId,imageFlag,itemCaption,itemCode,itemName,itemPrice,mediumImageUrls,postageFlag,shopCode,shopName,shopUrl,smallImageUrls,tagIds,taxFlag",
  });

  // カテゴリに対応するgenreIdのマッピング
  const categoryGenreMap: Record<Category, string> = {
    tops: "110765",
    pants: "558846",
    suits: "100372",
    overalls: "558863",
    rainwear: "566031",
    coats: "558873",
  };

  // カテゴリが存在する場合はgenreIdを追加し、なければ全カテゴリーより検索
  if (category && categoryGenreMap[category as Category]) {
    params.append("genreId", categoryGenreMap[category as Category]);
  }else {
	params.append("genreId","551177");
  }

  // キーワードを追加
  if (keyWord) {
    params.append("keyword", keyWord);
  }

  // 最低価格と最高価格を整数として追加
  if (minPrice) {
    params.append("minPrice", parseInt(minPrice, 10).toString());
  }

  if (maxPrice) {
    params.append("maxPrice", parseInt(maxPrice, 10).toString());
  }

  // 最終的なAPI URL
  rakutenApiUrl += `?${params.toString()}`;

  try {
    const apiResponse = await fetch(rakutenApiUrl);
    if (!apiResponse.ok) {
      throw new Error("データの取得に失敗しました");
    }

    const data = await apiResponse.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { message: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
};

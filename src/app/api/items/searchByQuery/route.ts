import { NextRequest, NextResponse } from "next/server";

export const GET = async(req: NextRequest,res: NextResponse) => {
    const { searchParams } = new URL(req.url);
    const keyWord = searchParams.get("keyWord") || "";
    const category = searchParams.get("category") || "";

    const appId = process.env.RAKUTEN_AP_ID;

    if(!appId) {
        NextResponse.json({ message: "RAKUTEN_AP_IDが未設定です" },{ status: 500 });
    }
    let rakutenApiUrl = `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?applicationId=${appId}&elements=availability,catchcopy,creditCardFlag,genreId,imageFlag,itemCaption,itemCode,itemName,itemPrice,mediumImageUrls,postageFlag,shopCode,shopName,shopUrl,smallImageUrls,tagIds,taxFlag`;

    // クエリパラメータを楽天APIに適用する
    const params = new URLSearchParams({
        format: "json",
        hits: "30",
    });

    if(keyWord) {
        params.append("keyWord", keyWord);
    }

    if(category) {
        params.append("category", category);
    }

    rakutenApiUrl += params.toString();

  try{
    const res = await fetch(rakutenApiUrl);
    if(!res.ok) {
        throw new Error("データの取得に失敗しました");
    }
    const data = await res.json();
    return NextResponse.json(data);

  }catch(err) {
    return NextResponse.json({ message: "サーバーエラーが発生しました"}, { status: 500 })
  }
};


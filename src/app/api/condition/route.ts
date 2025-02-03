import { db } from "@/db";
import { search_conditions } from "@/db/schemas/schema";
import { type NextRequest, NextResponse } from "next/server";

// 検索条件を登録する
export const POST = async ( req:NextRequest ) => {
  // MEMO: ユーザーIDが必要
  const request = await req.json();
  const { conditionName, minPrice, maxPrice, selectedCategory, keyWord } = request;
 try{
  await db.insert(search_conditions).values({
    users_id: 1,
    condition_name: conditionName,
    price_min: minPrice,
    price_max: maxPrice,
    category: selectedCategory,
    word: keyWord,
  });
  return NextResponse.json({ message: "検索条件の登録が成功しました。" }, { status: 200 });
 }catch(error){
  console.error(error);
  NextResponse.json({ message: "サーバーエラーが発生しました。" }, { status: 500 });
 } 
};
// 検索条件を編集する

// 検索条件を削除する

// 検索条件を取得する
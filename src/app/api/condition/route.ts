import { type NextRequest, NextResponse } from "next/server";

// 検索条件を登録する
export const POST = async ( req:NextRequest ) => {
 try{

 }catch(error){
  console.error(error);
  NextResponse.json({ message: "サーバーエラーが発生しました。" }, { status: 500 });
 } 
};
// 検索条件を編集する

// 検索条件を削除する

// 検索条件を取得する
import axios from "axios";
import { NextResponse } from "next/server";

// MEMO:エラーハンドリングを関数化してみたが、使えなさそうだったら消します。
// axiosのエラーハンドリング用関数
export const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      console.error("サーバーエラー:", error.response.status);
      console.error("エラーメッセージ:", error.response.data);
      return NextResponse.json({ message: error.response.data }, { status: error.response.status });
    } else if (error.request) {
      console.error("リクエストエラー:", error.request);
      return NextResponse.json({ message: "サーバーが応答しませんでした。" }, { status: 504 });
    } else {
      console.error("リクエスト設定エラー:", error.message);
      return NextResponse.json({ message: "無効なリクエスト設定。" }, { status: 400 });
    }
  }
  console.error("予期しないエラー:", error);
  return NextResponse.json({ message: "サーバー内部でエラーが発生しました。" }, { status: 500 });
};

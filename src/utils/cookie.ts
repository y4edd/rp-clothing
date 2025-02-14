import type { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

// Cookieの有効期限を2日とする
export const COOKIE_MAX_AGE = 60 * 60 * 48;

// サーバーサイドでCookieからtokenを取得するユーティリティ関数を定義
export const getTokenFromCookie = async () => {
  // サーバーコンポーネントでHTTPリクエストCookieを読み取り、
  // Server ActionsかRoute HandlerでCookieを
  // 読み書きできる関数（cookies）を使う
  const cookieStore = await cookies();
  const token = cookieStore.get("sessionId");
  if(!token){
    return null;
  }
  return token.value;
};

// クッキー設定（httpOnlyを有効化）
export const cookieOpt: Partial<ResponseCookie> = {
  httpOnly: true,
  secure: true,
  sameSite: "strict",
  maxAge: COOKIE_MAX_AGE,
  path: "/",
};

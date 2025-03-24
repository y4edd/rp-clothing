import { NextRequest, NextResponse } from "next/server"

// URLの取得はより早く行われる必要がある。
// そのため、node.jsではなくEdge Runtime環境で動くmiddlewareを利用する。
// Edge Runtime は軽量かつ地理的に近いサーバーで即座に実行されるため、
// 初期リクエスト時にパス情報などを即取得するのに最適。
export const middleware = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  const response = NextResponse.next();
  response.headers.set('x-pathname', pathname);
  return response;
}

// 必要なパスだけに適用する
export const config = {
  matcher: ["/mypage/favorite/:path*"],
}
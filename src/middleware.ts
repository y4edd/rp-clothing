import { NextRequest, NextResponse } from "next/server"

export const middleware = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  const response = NextResponse.next();
  response.headers.set('x-pathname', pathname);
  return response;
}

// 必要なパスだけに適用する
export const config = {
  matcher: ["/:path*"],
}
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https", // プロトコルを指定
        hostname: "thumbnail.image.rakuten.co.jp", // 楽天のホスト名を指定
        pathname: "/**", // 任意のパスを許可
      },
    ],
  },
};

export default nextConfig;

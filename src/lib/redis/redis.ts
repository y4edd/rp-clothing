import Redis from "ioredis";

const redisURL = process.env.REDIS_URL;
if (!redisURL) {
  throw new Error("Redisが設定されていません");
}

// Redis の接続をアプリ全体で使えるようにする
export const redisClient = new Redis(redisURL);

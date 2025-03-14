import Redis from "ioredis";

// 環境変数から Redis の接続URLを取得
const redisURL = process.env.REDIS_URL;

// 環境変数が設定されていない場合はエラーを出して停止
if (!redisURL) {
  throw new Error("Redisが設定されていません");
}

// "global" を使って Redis インスタンスを保存するための型定義
// TypeScript では "global" にカスタムプロパティを追加する際に型が必要
declare global {
  var redisClientGlobal: Redis | undefined;
}

// Redis のインスタンスを作成（ただし、すでに作成済みなら再利用）
// Next.js の開発環境（"next dev"）ではホットリロードが動くため、
//  通常の "new Redis(redisURL)" だと、ファイル変更のたびに新しい Redis インスタンスが作られてしまう。
//  これを防ぐために、"global.redisClient" に一度作ったインスタンスを保存し、
//  すでにある場合はそれを使うことで、無駄なインスタンス増加を防ぐ。

export const redisClient = global.redisClientGlobal ?? new Redis(redisURL);

//  開発環境では "global.redisClient" に保存して再利用できるようにする
//  本番環境ではファイルが再読み込みされないため、"global" を使わなくても問題ない
if (process.env.NODE_ENV !== "production") {
  global.redisClientGlobal = redisClient;
}

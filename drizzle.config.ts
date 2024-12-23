import type { Config } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config(); // .env ファイルをロード

console.log("DATABASE_URL:", process.env.DATABASE_URL);

export default {
  schema: "./src/db/schema.ts", // スキーマファイルのパス
  out: "./src/db/migrations",  // マイグレーションの出力先
  dialect: "postgresql",       // データベースの種類
  dbCredentials: {
    connectionString: process.env.DATABASE_URL, // 環境変数から取得
  },
} as Config;

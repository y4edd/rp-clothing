import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";
import { parse } from "pg-connection-string";

// .env ファイルの読み込み
dotenv.config();

// DATABASE_URL を解析して個別のプロパティに変換
const dbConfig = process.env.DATABASE_URL
  ? parse(process.env.DATABASE_URL)
  : null;

if (!dbConfig) {
  throw new Error("DBのURLが存在しないか間違っています");
}

export default defineConfig({
  // PostgreSQL の指定
  dialect: "postgresql",
  // スキーマファイル
  schema: "./src/db/schemas/schema.ts",
  // 出力先ディレクトリ
  out: "./src/db/migrations",
  dbCredentials: {
    // 環境変数から接続情報を取得
    // NOTE: dbCredentialsはhostやportを個別に指定しないと型エラーが起きます
    host: dbConfig.host || "localhost",
    port: dbConfig.port ? parseInt(dbConfig.port, 10) : undefined,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database || "default",
    ssl: {
      // 自己署名証明書を許可
      rejectUnauthorized: false,
    },
  },
});

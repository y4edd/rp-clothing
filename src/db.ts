import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./db/schemas/schema";

// PostgreSQL プールの初期化
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // .env ファイルから接続情報を取得
});

// drizzle の初期化
export const db = drizzle(pool, { schema });

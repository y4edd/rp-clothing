import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schemas/schema.ts",
  out: "./src/db/migrations/migrations",
  connectionString: process.env.DATABASE_URL,
  dialect: "postgresql",
} as Config;

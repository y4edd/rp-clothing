import { sql } from 'drizzle-orm';
import { pgTable, serial, integer, date, boolean, text } from 'drizzle-orm/pg-core';

// テーブルの定義
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: integer("password").notNull(),
  birthday: date("birthday").notNull()
});

export const search_conditions = pgTable("search_conditions", {
  id: serial("id").primaryKey(),
  users_id: text("users_id").references(() => users.id),
  condition_name: text("condition_name").notNull(),
  price_min: integer("price_min"),
  price_max: integer("price_max"),
  category: text("category").array().default(sql`"{}"::text`),
  word: text("condition_name"),
});

export const purchase_history = pgTable("purchase_conditions", {
  id: serial("id").primaryKey(),
  users_id: text("users_id").references(() => users.id),
  item_code: text("item_code").notNull(),
  date: date("birthday").notNull(),
  is_birthday_sale_use: boolean(),
});

export const look_history = pgTable("look_history", {
  id: serial("id").primaryKey(),
  users_id: text("users_id").references(() => users.id),
  item_code: text("item_code").notNull(),
});

export const favorite_item = pgTable("favorite_item", {
  id: serial("id").primaryKey(),
  users_id: integer("users_id").references(() => users.id),
  item_code: text("item_code").notNull(),
});

export const favorite_shop = pgTable("favorite_shop", {
  id: serial("id").primaryKey(),
  users_id: integer("users_id").references(() => users.id),
  shop_code: text("item_code").notNull(),
});

export const cart = pgTable("cart", {
  id: serial("id").primaryKey(),
  users_id: integer("users_id").references(() => users.id),
  item_code: text("item_code").notNull(),
});

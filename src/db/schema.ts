import { sql } from 'drizzle-orm';
import { pgTable, serial, integer, date, boolean, text, timestamp } from 'drizzle-orm/pg-core';

// テーブルの定義
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  birthday: date("birthday").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const search_conditions = pgTable("search_conditions", {
  id: serial("id").primaryKey(),
  users_id: integer("users_id").references(() => users.id).notNull(),
  condition_name: text("condition_name").notNull(),
  price_min: integer("price_min"),
  price_max: integer("price_max"),
  category: text("category").array().default(sql`ARRAY[]::text[]`),
  word: text("word"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const purchase_history = pgTable("purchase_history", {
  id: serial("id").primaryKey(),
  users_id: integer("users_id").references(() => users.id).notNull(),
  item_code: text("item_code").notNull(),
  date: date("date").notNull(),
  is_birthday_sale_use: boolean("is_birthday_sale_use"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const look_history = pgTable("look_history", {
  id: serial("id").primaryKey(),
  users_id: integer("users_id").references(() => users.id).notNull(),
  item_code: text("item_code").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const favorite_item = pgTable("favorite_item", {
  id: serial("id").primaryKey(),
  users_id: integer("users_id").references(() => users.id).notNull(),
  item_code: text("item_code").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const favorite_shop = pgTable("favorite_shop", {
  id: serial("id").primaryKey(),
  users_id: integer("users_id").references(() => users.id).notNull(),
  shop_code: text("shop_code").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const cart = pgTable("cart", {
  id: serial("id").primaryKey(),
  users_id: integer("users_id").references(() => users.id).notNull(),
  item_code: text("item_code").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const schema = {
  users,
  search_conditions,
  purchase_history,
  look_history,
  favorite_item,
  favorite_shop,
  cart,
};

import { sql } from "drizzle-orm";
import {
  boolean,
  date,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  unique,
} from "drizzle-orm/pg-core";

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

export const search_conditions = pgTable(
  "search_conditions",
  {
    id: serial("id").primaryKey(),
    users_id: integer("users_id")
      .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" })
      .notNull(),
    condition_name: text("condition_name").notNull(),
    price_min: text("price_min"),
    price_max: text("price_max"),
    category: text("category"),
    word: text("word"),
    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
  },
  (table) => ({
    // １人のユーザーが同じ名前の検索条件を持つことをゆるさない
    uniqueSearchCondition: unique().on(table.users_id, table.condition_name),
  }),
);

export const purchase_history = pgTable("purchase_history", {
  id: serial("id").primaryKey(),
  users_id: integer("users_id")
    .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" })
    .notNull(),
  item_price: text("item_price").notNull(),
  item_name: text("item_name").notNull(),
  item_image: text("item_image").notNull(),
  item_shop: text("item_shop").notNull(),
  date: date("date").notNull(),
  is_birthday_sale_use: boolean("is_birthday_sale_use"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const look_history = pgTable("look_history", {
  id: serial("id").primaryKey(),
  users_id: integer("users_id")
    .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" })
    .notNull(),
  item_code: text("item_code").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const favorite_item = pgTable("favorite_item", {
  id: serial("id").primaryKey(),
  users_id: integer("users_id")
    .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" })
    .notNull(),
  item_code: text("item_code").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const favorite_shop = pgTable("favorite_shop", {
  id: serial("id").primaryKey(),
  users_id: integer("users_id")
    .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" })
    .notNull(),
  shop_code: text("shop_code").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const cart = pgTable("cart", {
  id: serial("id").primaryKey(),
  users_id: integer("users_id")
    .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" })
    .notNull(),
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

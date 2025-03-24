import { pgTable, foreignKey, serial, integer, text, timestamp, date, boolean, unique } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const favoriteItem = pgTable("favorite_item", {
	id: serial().primaryKey().notNull(),
	usersId: integer("users_id").notNull(),
	itemCode: text("item_code").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.usersId],
			foreignColumns: [users.id],
			name: "favorite_item_users_id_users_id_fk"
		}).onUpdate("cascade").onDelete("cascade"),
]);

export const lookHistory = pgTable("look_history", {
	id: serial().primaryKey().notNull(),
	usersId: integer("users_id").notNull(),
	itemCode: text("item_code").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.usersId],
			foreignColumns: [users.id],
			name: "look_history_users_id_users_id_fk"
		}).onUpdate("cascade").onDelete("cascade"),
]);

export const purchaseHistory = pgTable("purchase_history", {
	id: serial().primaryKey().notNull(),
	usersId: integer("users_id").notNull(),
	itemPrice: text("item_price").notNull(),
	itemName: text("item_name").notNull(),
	itemImage: text("item_image").notNull(),
	itemShop: text("item_shop").notNull(),
	date: date().notNull(),
	isBirthdaySaleUse: boolean("is_birthday_sale_use"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.usersId],
			foreignColumns: [users.id],
			name: "purchase_history_users_id_users_id_fk"
		}).onUpdate("cascade").onDelete("cascade"),
]);

export const searchConditions = pgTable("search_conditions", {
	id: serial().primaryKey().notNull(),
	usersId: integer("users_id").notNull(),
	conditionName: text("condition_name").notNull(),
	priceMin: text("price_min"),
	priceMax: text("price_max"),
	category: text(),
	word: text(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.usersId],
			foreignColumns: [users.id],
			name: "search_conditions_users_id_users_id_fk"
		}).onUpdate("cascade").onDelete("cascade"),
	unique("search_conditions_users_id_condition_name_unique").on(table.usersId, table.conditionName),
]);

export const favoriteShop = pgTable("favorite_shop", {
	id: serial().primaryKey().notNull(),
	usersId: integer("users_id").notNull(),
	shopCode: text("shop_code").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.usersId],
			foreignColumns: [users.id],
			name: "favorite_shop_users_id_users_id_fk"
		}).onUpdate("cascade").onDelete("cascade"),
]);

export const users = pgTable("users", {
	id: serial().primaryKey().notNull(),
	name: text().notNull(),
	email: text().notNull(),
	password: text().notNull(),
	birthday: date().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	unique("users_email_unique").on(table.email),
]);

export const cart = pgTable("cart", {
	id: serial().primaryKey().notNull(),
	usersId: integer("users_id").notNull(),
	itemCode: text("item_code").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.usersId],
			foreignColumns: [users.id],
			name: "cart_users_id_users_id_fk"
		}).onUpdate("cascade").onDelete("cascade"),
]);

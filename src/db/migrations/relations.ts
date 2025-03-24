import { relations } from "drizzle-orm/relations";
import { users, favoriteItem, lookHistory, purchaseHistory, searchConditions, favoriteShop, cart } from "./schema";

export const favoriteItemRelations = relations(favoriteItem, ({one}) => ({
	user: one(users, {
		fields: [favoriteItem.usersId],
		references: [users.id]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	favoriteItems: many(favoriteItem),
	lookHistories: many(lookHistory),
	purchaseHistories: many(purchaseHistory),
	searchConditions: many(searchConditions),
	favoriteShops: many(favoriteShop),
	carts: many(cart),
}));

export const lookHistoryRelations = relations(lookHistory, ({one}) => ({
	user: one(users, {
		fields: [lookHistory.usersId],
		references: [users.id]
	}),
}));

export const purchaseHistoryRelations = relations(purchaseHistory, ({one}) => ({
	user: one(users, {
		fields: [purchaseHistory.usersId],
		references: [users.id]
	}),
}));

export const searchConditionsRelations = relations(searchConditions, ({one}) => ({
	user: one(users, {
		fields: [searchConditions.usersId],
		references: [users.id]
	}),
}));

export const favoriteShopRelations = relations(favoriteShop, ({one}) => ({
	user: one(users, {
		fields: [favoriteShop.usersId],
		references: [users.id]
	}),
}));

export const cartRelations = relations(cart, ({one}) => ({
	user: one(users, {
		fields: [cart.usersId],
		references: [users.id]
	}),
}));
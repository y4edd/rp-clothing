import { relations } from "drizzle-orm/relations";
import {
  cart,
  favoriteItem,
  favoriteShop,
  lookHistory,
  purchaseHistory,
  searchConditions,
  users,
} from "./schema";

export const searchConditionsRelations = relations(searchConditions, ({ one }) => ({
  user: one(users, {
    fields: [searchConditions.usersId],
    references: [users.id],
  }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  searchConditions: many(searchConditions),
  purchaseHistories: many(purchaseHistory),
  lookHistories: many(lookHistory),
  favoriteItems: many(favoriteItem),
  favoriteShops: many(favoriteShop),
  carts: many(cart),
}));

export const purchaseHistoryRelations = relations(purchaseHistory, ({ one }) => ({
  user: one(users, {
    fields: [purchaseHistory.usersId],
    references: [users.id],
  }),
}));

export const lookHistoryRelations = relations(lookHistory, ({ one }) => ({
  user: one(users, {
    fields: [lookHistory.usersId],
    references: [users.id],
  }),
}));

export const favoriteItemRelations = relations(favoriteItem, ({ one }) => ({
  user: one(users, {
    fields: [favoriteItem.usersId],
    references: [users.id],
  }),
}));

export const favoriteShopRelations = relations(favoriteShop, ({ one }) => ({
  user: one(users, {
    fields: [favoriteShop.usersId],
    references: [users.id],
  }),
}));

export const cartRelations = relations(cart, ({ one }) => ({
  user: one(users, {
    fields: [cart.usersId],
    references: [users.id],
  }),
}));

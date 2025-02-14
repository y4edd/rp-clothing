import { relations } from "drizzle-orm/relations";
import { users, cart, favorite_item, favorite_shop, look_history, purchase_history, search_conditions } from "../schemas/schema";

export const cartRelations = relations(cart, ({ one }) => ({
  user: one(users, {
    fields: [cart.users_id], 
    references: [users.id],
  }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  carts: many(cart),
  favorite_items: many(favorite_item),
  favorite_shops: many(favorite_shop),
  look_histories: many(look_history),
  purchase_histories: many(purchase_history),
  search_conditions: many(search_conditions),
}));

export const favoriteItemRelations = relations(favorite_item, ({ one }) => ({
  user: one(users, {
    fields: [favorite_item.users_id], 
    references: [users.id],
  }),
}));

export const favoriteShopRelations = relations(favorite_shop, ({ one }) => ({
  user: one(users, {
    fields: [favorite_shop.users_id], 
    references: [users.id],
  }),
}));

export const lookHistoryRelations = relations(look_history, ({ one }) => ({
  user: one(users, {
    fields: [look_history.users_id], 
    references: [users.id],
  }),
}));

export const purchaseHistoryRelations = relations(purchase_history, ({ one }) => ({
  user: one(users, {
    fields: [purchase_history.users_id], 
    references: [users.id],
  }),
}));

export const searchConditionsRelations = relations(search_conditions, ({ one }) => ({
  user: one(users, {
    fields: [search_conditions.users_id], 
    references: [users.id],
  }),
}));

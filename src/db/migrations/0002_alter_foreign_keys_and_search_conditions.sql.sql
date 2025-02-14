ALTER TABLE "cart" DROP CONSTRAINT "cart_users_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "favorite_item" DROP CONSTRAINT "favorite_item_users_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "favorite_shop" DROP CONSTRAINT "favorite_shop_users_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "look_history" DROP CONSTRAINT "look_history_users_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "purchase_history" DROP CONSTRAINT "purchase_history_users_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "search_conditions" DROP CONSTRAINT "search_conditions_users_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "search_conditions" ALTER COLUMN "price_min" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "search_conditions" ALTER COLUMN "price_max" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "search_conditions" ALTER COLUMN "category" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "search_conditions" ALTER COLUMN "category" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "cart" ADD CONSTRAINT "cart_users_id_users_id_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "favorite_item" ADD CONSTRAINT "favorite_item_users_id_users_id_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "favorite_shop" ADD CONSTRAINT "favorite_shop_users_id_users_id_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "look_history" ADD CONSTRAINT "look_history_users_id_users_id_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "purchase_history" ADD CONSTRAINT "purchase_history_users_id_users_id_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "search_conditions" ADD CONSTRAINT "search_conditions_users_id_users_id_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;
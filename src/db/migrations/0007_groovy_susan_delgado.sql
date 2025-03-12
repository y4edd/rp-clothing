ALTER TABLE "cart" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "cart" ALTER COLUMN "users_id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "favorite_item" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "favorite_item" ALTER COLUMN "users_id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "favorite_shop" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "favorite_shop" ALTER COLUMN "users_id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "look_history" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "look_history" ALTER COLUMN "users_id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "purchase_history" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "purchase_history" ALTER COLUMN "users_id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "purchase_history" ALTER COLUMN "date" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "search_conditions" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "search_conditions" ALTER COLUMN "users_id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "birthday" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "cart" ADD COLUMN "quantity" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "purchase_history" ADD COLUMN "quantity" integer NOT NULL;
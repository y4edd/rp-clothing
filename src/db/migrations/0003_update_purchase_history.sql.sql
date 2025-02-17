ALTER TABLE "purchase_history" ADD COLUMN "item_price" text NOT NULL;--> statement-breakpoint
ALTER TABLE "purchase_history" ADD COLUMN "item_name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "purchase_history" ADD COLUMN "item_image" text NOT NULL;--> statement-breakpoint
ALTER TABLE "purchase_history" ADD COLUMN "item_shop" text NOT NULL;--> statement-breakpoint
ALTER TABLE "purchase_history" DROP COLUMN "item_code";
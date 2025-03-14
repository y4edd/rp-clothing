ALTER TABLE "purchase_history" ALTER COLUMN "item_price" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "purchase_history" ADD COLUMN "payment_intent" text NOT NULL;--> statement-breakpoint
ALTER TABLE "purchase_history" DROP COLUMN "date";
"use server";

import { db } from "@/db";
import { cart } from "@/db/schemas/schema";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

// カートから商品を削除する関数
export const deleteItem = async (itemCode: string, userId: number) => {
  try {
    await db.delete(cart).where(and(eq(cart.item_code, itemCode), eq(cart.users_id, userId)));
    revalidatePath("/");
  } catch (error) {
    console.error("削除エラー:", error);
    throw new Error("アイテムの削除に失敗しました");
  }
};

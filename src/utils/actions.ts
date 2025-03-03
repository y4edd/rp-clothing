"use server";

import { db } from "@/db";
import { cart } from "@/db/schemas/schema";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { getTokenFromCookie } from "./cookie";
import { removeCartItem } from "./redis";

// カートから商品を削除する関数
export const deleteItem = async (itemCode: string, userId: number) => {
  try {
    // ログイン済みユーザー
    if (userId) {
      await db.delete(cart).where(and(eq(cart.item_code, itemCode), eq(cart.users_id, userId)));
      revalidatePath("/");
    } else {
      const sessionId = await getTokenFromCookie();
      if (!sessionId) {
        return;
      }

      await removeCartItem(sessionId, itemCode);
    }
  } catch (error) {
    console.error("削除エラー:", error);
    throw new Error("アイテムの削除に失敗しました");
  }
};

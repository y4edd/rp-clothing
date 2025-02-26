"use server";

import { db } from "@/db";
import { cart } from "@/db/schemas/schema";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const deleteItem = async (formData: FormData) => {
  const dataObj = formData.get("deleteItem") as string;
  // 「kaucowking:10056715」が入ってくるのを留意しないとダメ
  const { itemCode, userId } = JSON.parse(dataObj);

  try {
    // const res =await db.delete(cart).where(and(eq(cart.item_code, itemCode),eq(cart.users_id, userId)));
    const res =await db.select().from(cart).where(and(eq(cart.item_code, itemCode),eq(cart.users_id, userId)));
    console.log(res);
    revalidatePath("/");
  } catch (error) {
    console.error("削除エラー:", error);
    throw new Error("アイテムの削除に失敗しました");
  }
};

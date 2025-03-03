import { redisClient } from "@/lib/redis/redis";
import { CartItemInRedis } from "@/types/cart_item/cart_item";
import { revalidatePath } from "next/cache";

// Redisに保存するセッションデータの有効期限を2日とする
export const REDIS_MAX_AGE = 60 * 60 * 48;

// redisから当該のアイテムを削除する非同期処理
export const removeCartItem = async(sessionId:any,targetCartItem:any) => {
  const data = await redisClient.get(`sessionId:${sessionId}`);
  if(!data) {
    console.error("データなし");
    return;
  }
  const dataJSON:CartItemInRedis = JSON.parse(data);
  const deletedCartItem = dataJSON.filter(
    item => decodeURIComponent(item.cartItem) !== targetCartItem
  );
  const deletedCartItemJSON = JSON.stringify(deletedCartItem);

  await redisClient.set(`sessionId:${sessionId}`, deletedCartItemJSON);
  // cacheを削除し再レンダリング
  revalidatePath("/cart");
}
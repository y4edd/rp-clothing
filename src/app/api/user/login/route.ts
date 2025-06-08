import { db } from "@/db";
import { cart, users } from "@/db/schemas/schema";
import { redisClient } from "@/lib/redis/redis";
import type { CartItemInRedis } from "@/types/cart_item/cart_item";
import { cookieOpt } from "@/utils/cookie";
import { REDIS_MAX_AGE } from "@/utils/redis";
import bcryptjs from "bcryptjs";
import { and, eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export const POST = async (request: NextRequest) => {
  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ message: "秘密鍵が設定されていません" }, { status: 409 });
  }
  const body = await request.json();
  const { email, password, sessionId } = body;

  try {
    const userData = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!userData) {
      return NextResponse.json(
        { message: "メールアドレスもしくはパスワードが違います。" },
        { status: 401 },
      );
    }

    const isMatch = await bcryptjs.compare(password, userData.password);
    if (!isMatch) {
      return NextResponse.json({ message: "パスワードが違います。" }, { status: 401 });
    }

    const userId = Number(userData.id);

    if (sessionId) {
      // userIdを取得する（誰のところにカート情報を保存するか明確にする）
      const redis = await redisClient.get(`sessionId:${sessionId}`);
      if (!redis) return NextResponse.json({ message: "sessionIdが無効です" }, { status: 400 });
      const redisJSON: CartItemInRedis[] = JSON.parse(redis);

      // redisの中身をcartテーブルに移行する
      await Promise.all(
        redisJSON.map(async (cartItemObj) => {
          const itemCode = cartItemObj.cartItem;
          const quantity = cartItemObj.quantity;
          const decodedCartItem = decodeURIComponent(itemCode).replace(/^"|"$/g, "");
          const itemDBArr = await db
            .select({ itemCode: cart.itemCode, quantity: cart.quantity })
            .from(cart)
            .where(and(eq(cart.usersId, userId), eq(cart.itemCode, decodedCartItem)));
          //ユーザーのカートに商品があれば、数量だけを更新
          if (itemDBArr.length) {
            itemDBArr.map(async (itemDB) => {
              if (itemDB.itemCode === decodedCartItem) {
                const sum = itemDB.quantity + quantity;
                await db.update(cart).set({ quantity: sum }).where(eq(cart.usersId, userId));
              }
            });
          } else {
            //そのユーザーのカートに商品がなければ、新しくDBに追加
            await db.insert(cart).values({
              itemCode: decodedCartItem,
              quantity: quantity,
              usersId: userId,
            });
          }
        }),
      );
      // 移行後、redisの中にはsessionIdをキーとしたuserIdのみが入っているようにする
      await redisClient.set(
        `sessionId:${sessionId}`,
        JSON.stringify({ userId: userId }),
        "EX",
        REDIS_MAX_AGE,
      );
      const response = NextResponse.json({ message: "ログインに成功しました" }, { status: 200 });

      response.cookies.set("sessionId", sessionId, cookieOpt);
      return response;
    } else {
      // sessionId未発行ならここで新たに発行しRedisに保存
      const genSessionId = uuidv4();

      await redisClient.set(
        `sessionId:${genSessionId}`,
        JSON.stringify({ userId: userId }),
        "EX",
        REDIS_MAX_AGE,
      );
      const response = NextResponse.json({ message: "ログインに成功しました" }, { status: 200 });
      response.cookies.set("sessionId", genSessionId, cookieOpt);
      return response;
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました" }, { status: 500 });
  }
};

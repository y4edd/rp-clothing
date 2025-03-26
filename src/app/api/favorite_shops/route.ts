import { db } from "@/db";
import { favoriteShop } from "@/db/schemas/schema";
import { redisClient } from "@/lib/redis/redis";
import { and, eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  const userId = req.userId;
  const shopCode = req.shopCode;
  const decodedShopCode = decodeURIComponent(shopCode).replace(/^"|"$/g, "");
  const numUserId = Number(userId);
  const shopName = req.shopName;
  const shopUrl = req.shopUrl;

  if (!userId) {
    return NextResponse.json({ message: "ログインユーザー限定機能です。" }, { status: 403 });
  }

  try {
    // DB処理を記載
    await db.insert(favoriteShop).values({
      shopName: shopName,
      shopCode: decodedShopCode,
      shopUrl: shopUrl,
      usersId: numUserId,
    });
    return NextResponse.json({ message: "お気に入りのショップに登録されました" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました" }, { status: 500 });
  }
};

export const DELETE = async (request: NextRequest) => {
  const res = await request.json();
  const userId = res.userId;
  const shopCode = res.shopCode;
  const decodedShopCode = decodeURIComponent(shopCode).replace(/^"|"$/g, "");
  const numUserId = Number(userId);

  if (!userId) {
    return NextResponse.json({ message: "ログインユーザー限定機能です。" }, { status: 403 });
  }

  try {
    // DB処理を記載
    await db
      .delete(favoriteShop)
      .where(and(eq(favoriteShop.usersId, numUserId), eq(favoriteShop.shopCode, decodedShopCode)));

    return NextResponse.json(
      { message: "お気に入りショップの削除に成功しました" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました" }, { status: 500 });
  }
};

export const GET = async (request: NextRequest) => {
  const sessionIdString = request.headers.get("Cookie");
  if (!sessionIdString) {
    return NextResponse.json(
      { message: "セッションなし。このページは表示できません" },
      { status: 401 },
    );
  }
  const sessionId = sessionIdString.split("=")[1];
  // sessionIdからredis内のuserId取得
  const userIdObj = await redisClient.get(`sessionId:${sessionId}`);
  if (!userIdObj) {
    return NextResponse.json({ message: "ユーザーIDの取得に失敗しました" }, { status: 401 });
  }
  const userId = JSON.parse(userIdObj).userId;

  try {
    // ユーザーIdを元にお気に入りアイテム情報を取得
    const favShops = await db
      .select({
        shopCode: favoriteShop.shopCode,
        shopName: favoriteShop.shopName,
        shopUrl: favoriteShop.shopUrl,
      })
      .from(favoriteShop)
      .where(eq(favoriteShop.usersId, userId));
    return NextResponse.json({ favShops: favShops }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "データを取得できませんでした。" }, { status: 500 });
  }
};

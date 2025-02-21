import { db } from "@/db";
import { search_conditions } from "@/db/schemas/schema";
import { and, count, eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

// 検索条件を登録する(リクエストでuser_idは受け取る必要がある)
export const POST = async (req: NextRequest) => {
  // MEMO: ユーザーIDが必要
  const request = await req.json();
  const { conditionName, minPrice, maxPrice, selectedCategory, keyWord, userId } = request;

  // すでに５件登録されていたら、エラーを発生させる
  const conditionCount = await db.select({ count: count() }).from(search_conditions);

  if (conditionCount[0].count >= 6) {
    return NextResponse.json({ message: "登録できるのは6件までです！" }, { status: 403 });
  }

  // 検索条件の名前が重複していたらエラーを返す
  const existingItem = await db
    .select()
    .from(search_conditions)
    .where(
      and(eq(search_conditions.users_id, userId), eq(search_conditions.condition_name, conditionName)),
    );

  if (existingItem.length > 0) {
    return NextResponse.json({ message: "同じ名前の条件は登録できません！" }, { status: 409 });
  }

  try {
    await db.insert(search_conditions).values({
      users_id: userId,
      condition_name: conditionName,
      price_min: minPrice,
      price_max: maxPrice,
      category: selectedCategory,
      word: keyWord,
    });
    revalidatePath("/mypage/searchCondition");
    return NextResponse.json({ message: "検索条件の登録が成功しました。" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました。" }, { status: 500 });
  }
};

// 検索条件を編集する(リクエストでcondition_idとuser_idは受け取る必要がある)
export const PATCH = async (req: NextRequest) => {
  // MEMO: ユーザーIDが必要
  const request = await req.json();
  const { searchConditionId, conditionName, minPrice, maxPrice, selectedCategory, keyWord, userId } =
    request;

  // 検索条件の名前が重複していたらエラーを返す
  const existingItem = await db
    .select()
    .from(search_conditions)
    .where(
      and(
        eq(search_conditions.users_id, userId),
        eq(search_conditions.condition_name, conditionName),
        // 変更を加えるデータについては一意制約を無視（名前が変更されない場合のコンフリクトエラーを回避）
        sql`${search_conditions.id} <> ${searchConditionId}`,
      ),
    );

  if (existingItem.length > 0) {
    return NextResponse.json({ message: "同じ名前の条件は登録できません！" }, { status: 409 });
  }

  try {
    await db
      .update(search_conditions)
      .set({
        condition_name: conditionName,
        price_min: minPrice,
        price_max: maxPrice,
        category: selectedCategory,
        word: keyWord,
        updated_at: new Date(),
      })
      .where(
        // MEMO: 検索条件のIDを元に書き換える
        eq(search_conditions.id, searchConditionId),
      );
    return NextResponse.json({ message: "検索条件の編集が成功しました。" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サーバーエラーが発生しました。" }, { status: 500 });
  }
};

// 検索条件を削除する(リクエストでcondition_idとuser_idは受け取る必要がある)
export const DELETE = async (request: NextRequest) => {
  const req = await request.json();
  const searchConditionId = req.searchConditionId;
  const userId = req.userId;
  try {
    await db.delete(search_conditions).where(
      and(
        // MEMO: ユーザーのID、検索条件のIDを元に書き換える
        eq(search_conditions.id, searchConditionId),
        eq(search_conditions.users_id, userId),
      ),
    );
    return NextResponse.json({ message: "検索条件の編集が成功しました。" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "サバーエラーが発生しました。" }, { status: 500 });
  }
};

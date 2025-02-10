import { db } from "@/db";
import { users } from "@/db/schemas/schema";
import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";
import redis from "redis";
import session from "express-session";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { email, password } = body;
  const bcrypt = require("bcrypt");
  const express = require("express");
  const connectRedis = require("connectRedis");
  const app = express();
  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  try {
    if (!email || !password) {
      NextResponse.json({ message: "未入力です。" }, { status: 400 });
    }

    const userData = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!userData) {
      return NextResponse.json(
        { message: "メールアドレスもしくはパスワードが違います。" },
        { status: 409 },
      );
    }

    const isMatch = await bcrypt.compare(password, userData.password);

    if(!isMatch) {
      return NextResponse.json(
        { message: "パスワードが違います。" },
        { status: 409 },
      )
    }

    // 1.express-sessionとRedisの設定
    // （セッションストアをRedisに保存）
    // セッションのcookie設定を管理



    // 2.認証APIのセキュリティ強化
    // レートリミット（ブルートフォース攻撃）
    // CORSの設定（クロスサイトスクリプティング対策）




    return NextResponse.json({ message: "ログインが成功しました。" }, { status: 200 });
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ message: "サーバーエラーが発生しました。" }, { status: 500 });
  }
};

import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe/server";

// 決済ができるようにするためのclientSecretを取得する
export const POST = async (req: NextRequest) => {
  // リクエストで金額を取得する
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { message: "セッションなし。カートに商品は登録されていないようです" },
      { status: 400 },
    );
  }

  // 顧客情報を作成します
  const customer = await stripe.customers.create();
  // 支払いを可能にするため、決済方法や金額を元にpaymentIntentsを作成します
  const response = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "jpy",
    customer: customer.id,
    payment_method_types: ["card"],
  });

  return NextResponse.json(
    { client_secret: response.client_secret, customer_id: customer.id },
    { status: 200 },
  );
};

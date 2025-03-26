import stripe from "@/lib/stripe/server";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const amount = await request.json();

    if (!amount || typeof amount !== "number") {
      return NextResponse.json({ error: "無効な金額です。" }, { status: 400 });
    }

    // 支払い情報（PaymentIntent）作成（clientSecretが中にある！）
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "jpy",
      payment_method_types: ["card"],
    });

    // clientSecretを返却する
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

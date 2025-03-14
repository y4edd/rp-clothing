"use client";

import { createPaymentIntents } from "@/utils/paymentIntents";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("キーが設定されていません");
}
// APIキーを取得し、stripePromiseに保存
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutFormWrapper = ({ totalPrice }: { totalPrice: number }) => {
  const [clientSecret, setClientSecret] = useState<string>("");

  // 合計金額が変更されるたび、クライアントサイドから合計金額を基にPaymentIntentを作成し、
  // PaymentIntent内のclientSecretを受け取る
  // biome-ignore lint/correctness/useExhaustiveDependencies: レンダリングのたび、paymentIntentの取得を実行する
  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        const response = await createPaymentIntents(totalPrice);
        const clientSecret = response.clientSecret;
        setClientSecret(clientSecret);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPaymentIntent();
  }, []);

  // 何も取得していないのに描画され、aboveエラーが返ってくるのを防ぐ
  if (!clientSecret) return <p>ローディング中です・・・</p>;

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
};

export default CheckoutFormWrapper;

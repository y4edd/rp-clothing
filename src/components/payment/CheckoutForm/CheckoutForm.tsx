"use client";

import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "@/components/utils/button/Button";
import styles from "./CheckoutForm.module.css";
import LinkBtn from "@/components/utils/link/LinkBtn";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteCartItems } from "@/utils/apiFunc";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [message, setMessage] = useState<string | undefined | null>(null);

  if (!stripe || !elements) return;
  // StripeElementsのCardElement(カード情報入力フォーム)を取得する
  const handlePayment = async(event:any) => {
    event.preventDefault();

    // 支払いを確定させる
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // リダイレクトを防ぐ
        return_url: "if_required",
      },
    });

     // エラー用のハンドリング
    if (error) {
      setMessage(error.message);
      return;
    }

    // 正常に決済が行われ、DBのカート情報を削除
    try {
      const response = await deleteCartItems();
      if(!response.ok) {
        const res = await response.json();
        return res.message;
      }
      router.push("/cart/payment/success");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form onSubmit={handlePayment}>
        <PaymentElement />
        <div className={styles.paymentButton}>
          <LinkBtn pathName="/cart" text="戻る" btnColor="white" />
          <Button type="submit" className={styles.black} text="確定する"/>
        </div>
        {message}
      </form>
    </>
  );
}

export default CheckoutForm;
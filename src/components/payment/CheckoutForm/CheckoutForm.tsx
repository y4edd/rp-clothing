"use client";

import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "@/components/utils/button/Button";
import styles from "./CheckoutForm.module.css";
import LinkBtn from "@/components/utils/link/LinkBtn";
import { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string | undefined | null>(null);

  if (!stripe || !elements) return;
  // StripeElementsのCardElement(カード情報入力フォーム)を取得する
  const handlePayment = async(event:any) => {
    event.preventDefault();

    // 支払いを確定させる
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/api/handle_payment_success",
      },
    });

    // エラー用のハンドリング
    if (result.error) {
      setMessage(result.error.message);
      return;
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
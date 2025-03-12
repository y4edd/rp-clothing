"use client";

import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "@/components/utils/button/Button";
import styles from "./CheckoutForm.module.css";
import LinkBtn from "@/components/utils/link/LinkBtn";
import { useEffect, useState } from "react";

const CheckoutForm = ({ clientSecret }: { clientSecret: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string | undefined | null>(null);

  useEffect(() => {
    if (elements) {
      setTimeout(() => {
        console.log("PaymentElement:", elements.getElement(PaymentElement));
      }, 2000);
    }
  }, [elements]);

  if (!stripe || !elements) return;
  // StripeElementsのCardElement(カード情報入力フォーム)を取得する

  const handlePayment = async(event:any) => {
    event.preventDefault();

    // 支払いを確定させる
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // 支払い成功時のリダイレクト先
        return_url: "http://localhost:3000/cart/payment/sucess",
      }
    })

    // エラー用のハンドリング
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("予期せぬエラーが発生しました");
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
"use client";

import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "@/components/utils/button/Button";
import styles from "./CheckoutForm.module.css";
import LinkBtn from "@/components/utils/link/LinkBtn";
import { useEffect } from "react";

const CheckoutForm = ({ clientSecret }: { clientSecret: string }) => {
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (elements) {
      setTimeout(() => {
        console.log("PaymentElement:", elements.getElement(PaymentElement));
      }, 2000);
    }
  }, [elements]);

  if (!stripe || !elements) return;
  // StripeElementsのCardElement(カード情報入力フォーム)を取得する
  const card = elements.getElement(CardElement);

  const handlePayment = async(event:any) => {
    event.preventDefault();
    if(!card) {
      console.log("card", card);
      return;
    }

    // 支払いを確定させる
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        // カード情報を取得
        card: card,
      },
    });
    console.log("result", result);

  }

  return (
    <>
      <form onSubmit={handlePayment}>
        <PaymentElement />
        <div className={styles.paymentButton}>
          <LinkBtn pathName="/cart" text="戻る" btnColor="white" />
          <Button type="submit" className={styles.black} text="確定する"/>
        </div>
      </form>
    </>
  );
}

export default CheckoutForm;
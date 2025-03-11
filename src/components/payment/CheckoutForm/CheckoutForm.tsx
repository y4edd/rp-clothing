"use client";

import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEYを設定してください。");
}

const CheckoutForm: React.FC<{
  stripe: ReturnType<typeof loadStripe>;
  paymentIntent: Pick<Stripe.PaymentIntent, "client_secret" | "payment_method_options">;
}> = ({ stripe, paymentIntent }) => {
  if (!paymentIntent.client_secret) return null;
  return (
    <>
      <Elements
        stripe={stripe}
        options={{
          clientSecret: paymentIntent.client_secret,
        }}
      >
        <PaymentElement />
      </Elements>
    </>
  );
};

export default CheckoutForm;

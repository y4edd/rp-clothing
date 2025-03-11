import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { checkAuth } from "@/utils/checkAuth";
import { getCartItems } from "@/utils/apiFunc";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEYを設定してください。");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
  apiVersion: "2025-02-24.acacia",
});

const CreditCardForm = async () => {
  // sessionIdよりユーザーID取得
  const userId = await checkAuth();
  // DBからカート情報を取得する非同期関数
  const response = await getCartItems(userId);
  const totalPrice = response.totalAmount;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalPrice,
    currency: "mxn",
  });
  return (
    <CheckoutForm
      stripe={stripePromise}
      paymentIntent={{
        client_secret: paymentIntent.client_secret,
        payment_method_options: paymentIntent.payment_method_options,
      }}
    />
  );
};

export default CreditCardForm;

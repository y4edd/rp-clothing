import stripe from "@/lib/stripe/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(request: NextRequest, response: NextResponse) => {
  const customer = await stripe.customers.retrieve(request.body.customer_id);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: request.body.price_id,
        quantity: 1,
      },
    ],
    mode: "payment",
    customer: customer.id,
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
  });
  return NextResponse.json({
    checkout_url: session.url,
  },{status: 200});
}

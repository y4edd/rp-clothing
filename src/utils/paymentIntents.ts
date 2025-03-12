
// （引数：totalPrice）
// // 指定された金額（totalPrice）に基づいて PaymentIntent を作成する関数
export const createPaymentIntents = async(totalPrice:number) => {
  try {
    const response = await fetch("http://localhost:3000/api/payment_intent",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(totalPrice),
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "通信エラーが発生しました。" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
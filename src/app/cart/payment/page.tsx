import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import CheckoutFormWrapper from "@/components/payment/CheckoutFormWrapper/CheckoutFormWrapper";
import UnauthorizedAccess from "@/components/user/UnauthorizedAccess/UnauthorizedAccess";
import { getCartItems } from "@/utils/apiFunc";
import { checkAuth } from "@/utils/checkAuth";
import styles from "./page.module.css";

const Payment = async () => {
  // sessionIdよりユーザーID取得
  const userId = await checkAuth();
  if (!userId) {
    return <UnauthorizedAccess />;
  }

  // DBからカート情報を取得する非同期関数
  const response = await getCartItems(userId);
  const totalPrice = response.totalAmount;
  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/cart", title: "ショッピングカート" },
          { link: "/cart/payment", title: "お支払い" },
        ]}
      />
      <PageTitle title="お支払い" />
      <div className={styles.container}>
        <div className={styles.priceContainer}>
          <p className={styles.price}>合計金額：{totalPrice.toLocaleString()}円</p>
        </div>
        <div className={styles.paymentContainer}>
          <CheckoutFormWrapper totalPrice={totalPrice} />
        </div>
      </div>
    </>
  );
};

export default Payment;

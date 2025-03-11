import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import styles from "./page.module.css";
import LinkBtn from "@/components/utils/link/LinkBtn";
import CreditCardForm from "@/components/payment/CreditCardForm/CreditCardForm";

const Payment = () => {
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
        {/* 決済画面が埋め込まれます */}
        <CreditCardForm />
        <div className={styles.buttonContainer}>
          <LinkBtn pathName="/cart" text="戻る" btnColor="white" />
        </div>
      </div>
    </>
  );
};

export default Payment;

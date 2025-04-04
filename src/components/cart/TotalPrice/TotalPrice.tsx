import LinkBtn from "@/components/utils/link/LinkBtn";
import styles from "./TotalPrice.module.css";

export type TotalPriceProps = {
  isBirthday: boolean;
  totalPrice: number;
};

const TotalPrice = ({ isBirthday, totalPrice }: TotalPriceProps) => {
  return (
    <>
      {isBirthday && (
        <p className={styles.birthday}>誕生日割引（30%OFF）適用済みのお値段が表示されています</p>
      )}
      <div className={styles.totalPriceContainer}>
        <div className={styles.toTop}>
          <LinkBtn pathName="/" text="お買い物を続ける" btnColor="white" />
        </div>
        <div className={styles.separation} />
        <div className={styles.paymentContainer}>
          <p className={styles.price}>合計金額:{totalPrice.toLocaleString()}円</p>

          <div className={styles.toPayment}>
            <LinkBtn pathName="/cart/payment" text="レジに進む" btnColor="black" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalPrice;

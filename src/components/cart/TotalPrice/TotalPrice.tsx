import LinkBtn from "@/components/utils/link/LinkBtn";
import type { CartItemArr } from "@/types/cart_item/cart_item";
import styles from "./TotalPrice.module.css";

export type TotalPriceProps = {
  cartItemArr: CartItemArr;
  isBirthday: boolean;
};

const TotalPrice = ({ cartItemArr, isBirthday }: TotalPriceProps) => {
  let price = 0;
  cartItemArr.map((cartItem) => {
    price += cartItem.itemPrice * cartItem.quantity;
  });

  const disCountRate = 0.3;
  const discountPrice = price * (1 - disCountRate);

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
          {isBirthday ? (
            <p className={styles.price}>合計金額:{discountPrice.toLocaleString()}円</p>
          ) : (
            <p className={styles.price}>合計金額：{price.toLocaleString()}円</p>
          )}

          <div className={styles.toPayment}>
            <LinkBtn pathName="/cart/payment" text="レジに進む" btnColor="black" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalPrice;

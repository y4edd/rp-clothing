import LinkBtn from "@/components/utils/link/LinkBtn";
import styles from "./TotalPrice.module.css";
import { CartItemArr } from "@/types/cart_item/cart_item";

export type TotalPriceProps = {
  cartItemArr: CartItemArr;
}


const TotalPrice = ({cartItemArr}: TotalPriceProps) => {
  let price = 0;
  cartItemArr.map((cartItem) => {
    price += cartItem.itemPrice * cartItem.quantity;
  });

  return (
    <div className={styles.totalPriceContainer}>
      <div className={styles.toTop}>
        <LinkBtn pathName="/" text="お買い物を続ける" btnColor="white" />
      </div>
      <div className={styles.separation}></div>
      <div className={styles.paymentContainer}>
        <p className={styles.price}>合計金額：{price.toLocaleString()}円</p>
        <div className={styles.toPayment}>
          <LinkBtn pathName="/cart/payment" text="レジに進む" btnColor="black" />
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;

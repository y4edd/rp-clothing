import Image from "next/image";
import styles from "./PurchasedItem.module.css";

type PurchasedItemObj = {
  itemCode: string;
  itemName: string;
  itemPrice: number;
  itemImage: string;
  itemShop: string;
  createdAt: string;
  quantity: number;
};

type PurchasedItemProps = {
  purchasedHistory: PurchasedItemObj;
};

const PurchasedItem = ({ purchasedHistory }: PurchasedItemProps) => {
  const name = purchasedHistory.itemName;
  const trimmedName = name.length > 10 ? `${name.slice(0, 10)} ...` : name;
  const cratedAt = purchasedHistory.createdAt;
  const trimmedCreatedAt = cratedAt.length > 10 ? `${cratedAt.slice(0, 10)} ...` : cratedAt;
  return (
    <>
      <tr className={styles.cartItem}>
        <td className={styles.itemInfoCart}>
          <figure className={styles.itemImage}>
            <Image
              src={purchasedHistory.itemImage}
              alt="アイテム画像"
              width={200}
              height={200}
              className={styles.itemImage}
            />
          </figure>
          <dl className={styles.itemInfoDetail}>
            <dt className={styles.itemName}>商品名：{trimmedName}</dt>
            <dt className={styles.itemPrice}>価格：{purchasedHistory.itemPrice}円</dt>
            <dt className={styles.itemPrice}>数量：{purchasedHistory.quantity}</dt>
          </dl>
        </td>
        <td className={styles.itemShop}>{purchasedHistory.itemShop}</td>
        <td className={styles.itemShop}>{trimmedCreatedAt}</td>
      </tr>
    </>
  );
};

export default PurchasedItem;

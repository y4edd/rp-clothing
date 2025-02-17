import Image from "next/image";
import styles from "./CartItem.module.css";
import DeleteCartButton from "../DeleteCartButton/DeleteCartButton";

const CartItem = () => {
  return (
    <>
      <tr className={styles.cartItem}>
        <td className={styles.itemInfo}>
          <dl className={styles.itemImage}>
            <Image
              src="/sample/sample-item-image.png"
              alt="アイテム画像"
              width={200}
              height={200}
              className={styles.itemImage}
            />
          </dl>
          <dl className={styles.itemInfoDetail}>
            <dt className={styles.itemName}>商品名：</dt>
            <dd>サンプル</dd>
            <dt className={styles.itemPrice}>価格：</dt>
            <dd>2000円</dd>
          </dl>
        </td>
        <td className={styles.itemShop}>
          2ndStreetコートジボワール店
        </td>
        <td className={styles.itemQuantity}>
          1
        </td>
        <td className={styles.deleteButton}>
          <DeleteCartButton />
        </td>
      </tr>
      <tr className={styles.cartItem}>
      <td className={styles.itemInfo}>
        <dl className={styles.itemImage}>
          <Image
            src="/sample/sample-item-image.png"
            alt="アイテム画像"
            width={200}
            height={200}
            className={styles.itemImage}
          />
        </dl>
        <dl className={styles.itemInfoDetail}>
          <dt className={styles.itemName}>商品名：</dt>
          <dd>サンプル</dd>
          <dt className={styles.itemPrice}>価格：</dt>
          <dd>2000円</dd>
        </dl>
      </td>
      <td className={styles.itemShop}>
        2ndStreetコートジボワール店
      </td>
      <td className={styles.number}>
        1
      </td>
      <td className={styles.deleteButton}>
        <DeleteCartButton />
      </td>
    </tr>
    </>
  )
}

export default CartItem;
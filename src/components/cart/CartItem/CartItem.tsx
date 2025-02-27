import Image from "next/image";
import Link from "next/link";
import DeleteCartButton from "../DeleteCartButton/DeleteCartButton";
import styles from "./CartItem.module.css";

type cartItemObj = {
  itemName: string;
  itemCode: string;
  itemPrice: number;
  itemImage: string;
  shopCode: string;
  shopName: string;
  shopUrl: string;
  quantity: number;
};

type CartItemProps = {
  item: cartItemObj;
  userId: string;
};

const CartItem = ({ item, userId }: CartItemProps) => {
  const name = item.itemName;
  const trimmedName = name.length > 10 ? `${name.slice(0, 10)} ...` : name;
  return (
    <>
      <tr className={styles.cartItem}>
        <td className={styles.itemInfo}>
          <figure className={styles.itemImage}>
            <Image
              src={item.itemImage}
              alt="アイテム画像"
              width={200}
              height={200}
              className={styles.itemImage}
            />
          </figure>
          <dl className={styles.itemInfoDetail}>
            <dt className={styles.itemName}>商品名：</dt>
            <dd className={styles.itemName}>
              <Link href={`http://localhost:3000/item/${item.itemCode}`}>{trimmedName}</Link>
            </dd>
            <dt className={styles.itemPrice}>価格：</dt>
            <dd>{item.itemPrice.toLocaleString()}円</dd>
          </dl>
        </td>
        <td className={styles.itemShop}>
          <Link href={item.shopUrl}>{item.shopName}</Link>
        </td>
        <td className={styles.itemQuantity}>{item.quantity}</td>
        <td className={styles.deleteButton}>
          <DeleteCartButton itemCode={item.itemCode} userId={userId} />
        </td>
      </tr>
    </>
  );
};

export default CartItem;

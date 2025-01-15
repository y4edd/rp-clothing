import Image from "next/image";
import Link from "next/link";
import FavoriteBUtton from "../FavoriteButton/FavoriteButton";
import styles from "./Item.module.css";

type Prop = {
  itemName: string;
  itemCode: string;
  imageUrl: string;
  itemPrice: number;
};

const Item = ({ itemName, itemCode, imageUrl, itemPrice }: Prop) => {
  return (
    <div className={styles.itemContent}>
      <Link href={itemCode}>
        <div className={styles.item}>
          <Image
            src={imageUrl}
            alt="アイテム画像"
            width={200}
            height={200}
            className={styles.itemImage}
          />
          <h3 className={styles.itemName}>{itemName}</h3>
          <p className={styles.price}>金額 : ¥ {itemPrice.toLocaleString()} (税込) </p>
        </div>
      </Link>
      <FavoriteBUtton />
    </div>
  );
};

export default Item;

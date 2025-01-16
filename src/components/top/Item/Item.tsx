import Image from "next/image";
import Link from "next/link";
import FavoriteBUtton from "../FavoriteButton/FavoriteButton";
import styles from "./Item.module.css";

type Prop = {
  linkPath: string;
  src: string;
  itemName: string;
  itemPrice: string;
};

const Item = ({ linkPath, src, itemName, itemPrice }: Prop) => {
  return (
    <div className={styles.itemContent}>
      <div className={styles.item}>
        <Link href={linkPath}>
          <Image
            src={src}
            alt="アイテム画像"
            width={200}
            height={200}
            className={styles.itemImage}
          />
          <h3 className={styles.itemName}>{itemName}</h3>
          <p className={styles.price}>金額 : ¥{itemPrice} (税込) </p>
        </Link>
      </div>
      <FavoriteBUtton />
    </div>
  );
};

export default Item;

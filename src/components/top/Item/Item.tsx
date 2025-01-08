import Image from "next/image";
import styles from "./Item.module.css";
import Link from "next/link";
import FavoriteBUtton from "../FavoriteButton/FavoriteBUtton";

type Prop = {
  linkPath: string;
};

const Item = ({ linkPath }: Prop) => {
  return (
    <div className={styles.itemContent}>
      <div className={styles.item}>
        <Link href={linkPath}>
          <Image
            src={"/sample/sample-item-image.png"}
            alt="アイテム画像"
            width={200}
            height={200}
            className={styles.itemImage}
          />
          <h3 className={styles.itemName}>Item Name</h3>
          <p className={styles.price}>金額 : ¥ 1,000 (税込) </p>
        </Link>
      </div>
      <FavoriteBUtton />
    </div>
  );
};

export default Item;

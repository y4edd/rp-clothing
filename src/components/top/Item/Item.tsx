import Image from "next/image";
import React from "react";
import styles from "./Item.module.css";

const Item = () => {
  return (
    <div className={styles.item}>
      <Image
        src={"/sample/sample-item-image.png"}
        alt="アイテム画像"
        width={200}
        height={200}
        className={styles.itemImage}
      />
      <h3 className={styles.itemName}>Item Name</h3>
      <p className={styles.price}>金額 : ¥ 1,000 (税込) </p>
    </div>
  );
};

export default Item;

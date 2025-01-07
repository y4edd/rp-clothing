import React from "react";
import styles from "./NewItems.module.css";
import Link from "next/link";
import Item from "../Item/Item";

const NewItems = () => {
  // MEMO アイテム情報取得したら消します
  const sampleArray = new Array(15).fill(0);

  return (
    <div className={styles.container}>
      <h2 className={styles.contentTitle}>新着アイテム</h2>
      <div className={styles.gridItems}>
        {sampleArray.map((item, index) => (
          <Link href={"/"} key={item + index}>
            <Item />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewItems;

"use client";

import type { ItemData } from "@/types/item/item";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FavoriteBUtton from "../FavoriteButton/FavoriteButton";
import styles from "./Item.module.css";

const Item = ({ itemCode, itemName, itemPrice, itemImage }: ItemData) => {
  const [_imageSrc, setImageSrc] = useState(itemImage);
  const handleError = () => {
    setImageSrc("/images/no-image.jpg");
  };
  return (
    <div className={styles.itemContent}>
      <Link href={`/item/${itemCode}`}>
        <div className={styles.item}>
          <Image
            src={itemImage || "/images/no-image.jpg"}
            // 404エラーが出ないように
            onError={handleError}
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

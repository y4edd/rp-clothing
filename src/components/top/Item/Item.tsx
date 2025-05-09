"use client";

import type { ItemData } from "@/types/item/item";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styles from "./Item.module.css";

const Item = ({ itemCode, itemName, itemPrice, itemImage }: ItemData) => {
  const [imageSrc, setImageSrc] = useState(itemImage);
  const handleError = () => {
    setImageSrc("/images/no-image.jpg");
  };
  return (
    <div className={styles.itemContent}>
      <Link href={`/item/${itemCode}`}>
        <div className={styles.item}>
          <Image
            src={imageSrc || "/images/no-image.jpg"}
            // 404エラーが出ないように
            onError={handleError}
            alt="アイテム画像"
            width={200}
            height={200}
            className={styles.itemImage}
          />
          <h3 className={styles.itemName}>{itemName}</h3>
          <p className={styles.price}>
            金額 : ¥ {typeof itemPrice === "number" ? itemPrice.toLocaleString() : "価格不明"}{" "}
            (税込)
          </p>
        </div>
      </Link>
      <FavoriteButton itemCode={itemCode} />
    </div>
  );
};

export default Item;

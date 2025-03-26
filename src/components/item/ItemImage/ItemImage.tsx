"use client";
import FavoriteButton from "@/components/top/FavoriteButton/FavoriteButton";
import Image from "next/image";
import { useState } from "react";
import styles from "./ItemImage.module.css";

type Prop = {
  itemImage: string;
  itemCode: string;
};

const ItemImage = ({ itemImage, itemCode }: Prop) => {
  const [imageSrc, setImageSrc] = useState(itemImage);
  const handleError = () => {
    setImageSrc("/images/no-image.jpg");
  };
  return (
    <div className={styles.itemImage}>
      <Image
        src={imageSrc}
        alt="アイテム画像"
        onError={handleError}
        width={200}
        height={200}
        priority
        className={styles.img}
      />
      <FavoriteButton itemCode={itemCode} />
    </div>
  );
};

export default ItemImage;

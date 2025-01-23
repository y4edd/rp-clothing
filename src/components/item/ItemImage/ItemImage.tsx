"use client";
import Image from "next/image";
import styles from "./ItemImage.module.css";
import FavoriteButton from "@/components/top/FavoriteButton/FavoriteButton";
import { useState } from "react";

type Prop = {
  itemImage: string;
};

const ItemImage = ({ itemImage }: Prop) => {
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
      <FavoriteButton />
    </div>
  );
};

export default ItemImage;

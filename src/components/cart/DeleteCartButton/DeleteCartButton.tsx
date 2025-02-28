"use client";

import Button from "@/components/utils/button/Button";
import styles from "./DeleteCartButton.module.css";

const DeleteCartButton = () => {
  const handleDelete = () => {
    console.log("削除処理実装予定");
  };
  return (
    <Button type="button" onClick={handleDelete} className={styles.black} text="カートから削除" />
  );
};

export default DeleteCartButton;

"use client";

import Button from "@/components/utils/button/Button";
import { deleteItem } from "@/utils/actions";
import styles from "./DeleteCartButton.module.css";

type DeleteCartButtonProps = {
  itemCode: string;
  userId: number;
};

const DeleteCartButton = ({ itemCode, userId }: DeleteCartButtonProps) => {
  const handleDelete = async () => {
    await deleteItem(itemCode, userId);
  };

  return (
    <Button type="submit" className={styles.black} onClick={handleDelete} text={"カートから削除"} />
  );
};

export default DeleteCartButton;

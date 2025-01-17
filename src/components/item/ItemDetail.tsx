import React from "react";
import ItemDescription from "./ItemDescription/ItemDescription";
import styles from "./ItemDetail.module.css";
import ItemInfo from "./ItemInfo/ItemInfo";

const ItemDetail = () => {
  return (
    <div className={styles.container}>
      <ItemInfo />
      <ItemDescription />
    </div>
  );
};

export default ItemDetail;

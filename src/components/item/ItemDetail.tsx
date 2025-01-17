import React from "react";
import styles from "./ItemDetail.module.css";
import ItemInfo from "./ItemInfo/ItemInfo";
import ItemDescription from "./ItemDescription/ItemDescription";

const ItemDetail = () => {
  return (
    <div className={styles.container}>
      <ItemInfo/>
      <ItemDescription/>
    </div>
  );
};

export default ItemDetail;

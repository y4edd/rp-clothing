import FavoriteButton from "@/components/top/FavoriteButton/FavoriteButton";
import Image from "next/image";
import SelectQuantity from "../SelectQuantity/SelectQuantity";
import styles from "./ItemInfo.module.css";
import type { ItemDetailModel } from "../ItemDetail";
import FavoriteShopButton from "../FavoriteShopButton/FavoriteShopButton";

type Props = {
  itemData: ItemDetailModel;
};
const ItemInfo = ({ itemData }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.itemImage}>
        <Image
          src={itemData.itemImage}
          alt="アイテム画像"
          width={200}
          height={200}
          priority
          className={styles.img}
        />
        <FavoriteButton />
      </div>
      <dl className={styles.infoList}>
        <div className={styles.infoContent}>
          <dt>商品名 :</dt>
          <dd>{itemData.itemName}</dd>
        </div>
        <div className={styles.infoContent}>
          <dt>販売店舗 :</dt>
          <dd className={styles.favoriteShop}>
            <p>{itemData.shopName}</p>
            <FavoriteShopButton/>
          </dd>
        </div>
        <div className={styles.infoContent}>
          <dt>値段 :</dt>
          <dd>¥ {itemData.itemPrice.toLocaleString()} <span className={styles.taxText}>(税込)</span></dd>
        </div>
        <SelectQuantity />
      </dl>
    </div>
  );
};

export default ItemInfo;

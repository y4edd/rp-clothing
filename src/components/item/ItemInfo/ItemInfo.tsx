import type { ItemDetailModel } from "@/types/item/item";
import Link from "next/link";
import FavoriteShopButton from "../FavoriteShopButton/FavoriteShopButton";
import ItemImage from "../ItemImage/ItemImage";
import SelectQuantity from "../SelectQuantity/SelectQuantity";
import styles from "./ItemInfo.module.css";

type Props = {
  itemData: ItemDetailModel;
};

const ItemInfo = ({ itemData }: Props) => {
  return (
    <div className={styles.container}>
      <ItemImage itemImage={itemData.itemImage} />
      <dl className={styles.infoList}>
        <div className={styles.infoContent}>
          <dt>商品名 :</dt>
          <dd>{itemData.itemName}</dd>
        </div>
        <div className={styles.infoContent}>
          <dt>販売店舗 :</dt>
          <dd className={styles.favoriteShop}>
            <Link href={itemData.shopUrl} className={styles.shopLink}>
              {itemData.shopName}
            </Link>
            <FavoriteShopButton />
          </dd>
        </div>
        <div className={styles.infoContent}>
          <dt>値段 :</dt>
          <dd>
            ¥ {itemData.itemPrice.toLocaleString()}
            <span className={styles.taxText}>(税込)</span>
          </dd>
        </div>
        <SelectQuantity />
      </dl>
    </div>
  );
};

export default ItemInfo;

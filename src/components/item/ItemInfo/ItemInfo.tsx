import FavoriteButton from "@/components/top/FavoriteButton/FavoriteButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";
import SelectQuantity from "../SelectQuantity/SelectQuantity";
import styles from "./ItemInfo.module.css";
import type { ItemDetailModel } from "../ItemDetail";

type Props = {
  itemData: ItemDetailModel;
};
const ItemInfo = ({ itemData }: Props) => {
  console.log(itemData,'ititii')
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
            {/* MEMO：店名の長さによってお気に入りボタンの位置を調整したいのでAPI作成後に調整します。 */}
            {itemData.shopName} <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
          </dd>
        </div>
        <div className={styles.infoContent}>
          <dt>値段 :</dt>
          <dd>¥ {itemData.itemPrice.toLocaleString()} (税込)</dd>
        </div>
        <SelectQuantity />
      </dl>
    </div>
  );
};

export default ItemInfo;

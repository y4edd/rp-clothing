import FavoriteBUtton from "@/components/top/FavoriteButton/FavoriteButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";
import SelectQuantity from "../SelectQuantity/SelectQuantity";
import styles from "./ItemInfo.module.css";
const ItemInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.itemImage}>
        <Image
          src={"/sample/sample-item-image.png"}
          alt="アイテム画像"
          width={200}
          height={200}
          className={styles.img}
        />
        <FavoriteBUtton />
      </div>
      <dl className={styles.infoList}>
        <div className={styles.infoContent}>
          <dt>商品名 :</dt>
          <dd>サンプル商品</dd>
        </div>
        <div className={styles.infoContent}>
          <dt>販売店舗 :</dt>
          <dd className={styles.favoriteShop}>
            {/* MEMO：店名の長さによってお気に入りボタンの位置を調整したいのでAPI作成後に調整します。 */}
            〇〇〇商店 <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
          </dd>
        </div>
        <div className={styles.infoContent}>
          <dt>値段 :</dt>
          <dd>¥ 2,000 (税込)</dd>
        </div>
        <SelectQuantity />
      </dl>
    </div>
  );
};

export default ItemInfo;

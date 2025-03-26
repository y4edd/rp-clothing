import FavoriteShopButton from "@/components/item/FavoriteShopButton/FavoriteShopButton";
import Shop from "../Shop/Shop";
import styles from "./FavShopList.module.css";

export type FavShop = {
  shopCode: string;
  shopName: string;
  shopUrl: string;
};

export type FavShopListProps = {
  favShopsArr: FavShop[];
  userId: string;
};

const FavShopList = async ({ favShopsArr, userId }: FavShopListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.gridItems}>
        {favShopsArr.map((favShop) => (
          <div key={favShop.shopCode} className={styles.shopContainer}>
            <FavoriteShopButton
              userId={userId}
              shopCode={favShop.shopCode}
              shopName={favShop.shopName}
              shopUrl={favShop.shopUrl}
            />
            <div className={styles.shopInfo}>
              <Shop shopName={favShop.shopName} shopUrl={favShop.shopUrl} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavShopList;

import NoItems from "@/app/search/noItems";
import Item from "@/components/top/Item/Item";
import type { ItemData } from "@/types/item/item";
import styles from "./FavItemList.module.css";

type Props = {
  items: ItemData[] | null;
};

const FavItemList = ({ items }: Props) => {
  if (!items) return <NoItems />;
  return (
    <div className={styles.container}>
      <div className={styles.gridItems}>
        {items.map((item) => (
          <Item
            key={item.itemCode}
            itemCode={item.itemCode}
            itemName={item.itemName}
            itemPrice={item.itemPrice}
            itemImage={item.itemImage || "/images/no-image.jpg"}
          />
        ))}
      </div>
    </div>
  );
};

export default FavItemList;

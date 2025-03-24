import NoItems from "@/app/search/noItems";
import { ItemData } from "@/types/item/item";
import styles from "./FavItemList.module.css";
import Item from "@/components/top/Item/Item";
type Props = {
  items: ItemData[] | null;
  title?: string;
};

const FavItemList = ({ items, title }: Props) => {
  if (!items) return <NoItems />;
  return (
    <div className={styles.container}>
      <h2 className={styles.contentTitle}>{title}</h2>
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
  )
}

export default FavItemList;
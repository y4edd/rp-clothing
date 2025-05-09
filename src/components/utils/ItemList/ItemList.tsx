import NoItems from "@/app/search/noItems";
import type { ItemData } from "@/types/item/item";
import ItemInformation from "../../top/Item/Item";
import styles from "./ItemList.module.css";

type Props = {
  items: ItemData[] | null;
  title: string;
};

const ItemList = ({ items, title }: Props) => {
  // MEMO:エラー表示コンポーネント作成する？
  if (!items) return <NoItems />;

  return (
    <div className={styles.container}>
      <h2 className={styles.contentTitle}>{title}</h2>
      <div className={styles.gridItems}>
        {items.map((item) => (
          <ItemInformation
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

export default ItemList;

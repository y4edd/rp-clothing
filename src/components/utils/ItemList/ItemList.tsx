import ItemInformation from "../../top/Item/Item";
import type { Item } from "@/types/item/item";
import styles from "./ItemList.module.css";
type  Props = {
  items: Item[] | null;
  title: string;
}
const ItemList = ({ items, title }: Props) => {
  // MEMO:エラー表示コンポーネント作成する？
  if (!items) return <p>データを取得できませんでした。</p>;

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
            itemImage={item.itemImage}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;

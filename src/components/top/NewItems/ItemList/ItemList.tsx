import ItemInformation from "../../Item/Item";
import type { Item } from "@/types/item/item";
import styles from "./ItemList.module.css";
type  Props = {
  newItems: Item[] | null;
}
const ItemList = ({ newItems }: Props) => {
  // MEMO:エラー表示コンポーネント作成する？
  if (!newItems) return <p>データを取得できませんでした。</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.contentTitle}>新着アイテム</h2>
      <div className={styles.gridItems}>
        {newItems.map((item) => (
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

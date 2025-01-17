import Item from "../../Item/Item";
import type { NewItemsModel } from "../NewItems";
import styles from "./ItemList.module.css";
interface Props {
  newItems: NewItemsModel[] | null;
}
const ItemList = ({ newItems }: Props) => {
  // MEMO:エラー表示コンポーネント作成する？
  if (!newItems) return <p>データを取得できませんでした。</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.contentTitle}>新着アイテム</h2>
      <div className={styles.gridItems}>
        {newItems.map((item) => (
          <Item
            key={item.itemCode}
            itemName={item.itemName}
            itemCode={item.itemCode}
            imageUrl={item.imageUrl}
            itemPrice={item.itemPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;

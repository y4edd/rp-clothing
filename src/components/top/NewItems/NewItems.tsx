import type { NewItemsModel } from "@/app/(top)/page";
import Item from "../Item/Item";
import styles from "./NewItems.module.css";

interface Props {
  newItems: NewItemsModel[] | null;
}

const NewItems = ({ newItems }: Props) => {
  // MEMO:エラー表示コンポーネント作成する？
  // MEMO:Ladingコンポーネントもする？
  if(!newItems)return <p>データを取得できませんでした。</p>
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

export default NewItems;

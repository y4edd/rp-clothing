import Item from "../Item/Item";
import styles from "./NewItems.module.css";

export interface NewItemsModel {
  itemName: string;
  itemCode: string;
  imageUrl: string;
  itemPrice: number;
}

const NewItems = async () => {
  const newItems: NewItemsModel[] |null = await getNewItems();
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

const getNewItems = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/items/newItems", {
      next: { revalidate: 3600 },//１時間で再検証
    });
    if (!response.ok) {
      throw new Error("データを取得できませんでした。");
    }
    const items = await response.json();
    return items.items;
  } catch (error) {
    console.log(error);
    return null;
  }
};

import ItemList from "./ItemList/ItemList";

export interface NewItemsModel {
  itemName: string;
  itemCode: string;
  imageUrl: string;
  itemPrice: number;
}

const NewItems = async () => {
  const newItems: NewItemsModel[] | null = await getNewItems();
  // MEMO:Ladingコンポーネントもする？
  return <ItemList newItems={newItems} />;
};

export default NewItems;

// 新着アイテムの取得関数
export const getNewItems = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/items/newItems", {
      next: { revalidate: 3600 }, //１時間で再検証
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

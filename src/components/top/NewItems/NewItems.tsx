import type { ItemData } from "@/types/item/item";
import { getNewItems } from "@/utils/apiFunc";
import ItemList from "../../utils/ItemList/ItemList";

const NewItems = async () => {
  const newItems: ItemData[] | null = await getNewItems();
  // MEMO:Ladingコンポーネントもする？
  return <ItemList items={newItems} title="新着アイテム" />;
};

export default NewItems;

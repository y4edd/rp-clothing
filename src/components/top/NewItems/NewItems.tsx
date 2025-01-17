import type { Item } from "@/types/item/item";
import ItemList from "../../utils/ItemList/ItemList";
import { getNewItems } from "@/utils/apiFunc";

const NewItems = async () => {
  const newItems: Item[] | null = await getNewItems();
  // MEMO:Ladingコンポーネントもする？
  return <ItemList items={newItems} title="新着アイテム" />;
};

export default NewItems;

import type { ItemDetailModel } from "@/types/item/item";
import { getItemDetail } from "@/utils/apiFunc";
import ItemDescription from "./ItemDescription/ItemDescription";
import styles from "./ItemDetail.module.css";
import ItemInfo from "./ItemInfo/ItemInfo";
import NoItem from "./NoItem/NoItem";
import { addHistory, History } from "@/utils/addHistory";

type Props = {
  itemCode: string;
  history: History;
};
const ItemDetail = async ({ itemCode, history }: Props) => {
  const itemData: ItemDetailModel | null = await getItemDetail(itemCode);

  if (!itemData) return <NoItem />;

  await addHistory(history);
  
  return (
    <div className={styles.container} >
      <ItemInfo itemData={itemData}  />
      <ItemDescription description={itemData.itemCaption} />
    </div>
  );
};

export default ItemDetail;

import type { ItemDetailModel } from "@/types/item/item";
import { type History, addHistory } from "@/utils/addHistory";
import { getItemDetail } from "@/utils/apiFunc";
import ItemDescription from "./ItemDescription/ItemDescription";
import styles from "./ItemDetail.module.css";
import ItemInfo from "./ItemInfo/ItemInfo";
import NoItem from "./NoItem/NoItem";

type Props = {
  history: History;
};
const ItemDetail = async ({ history }: Props) => {
  const itemData: ItemDetailModel | null = await getItemDetail(history.itemCode);

  if (!itemData) return <NoItem />;

  await addHistory(history);

  return (
    <div className={styles.container}>
      <ItemInfo itemData={itemData} />
      <ItemDescription description={itemData.itemCaption} />
    </div>
  );
};

export default ItemDetail;

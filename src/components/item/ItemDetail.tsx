import { getItemDetail } from "@/utils/apiFunc";
import ItemDescription from "./ItemDescription/ItemDescription";
import styles from "./ItemDetail.module.css";
import ItemInfo from "./ItemInfo/ItemInfo";
import NoItem from "./NoItem/NoItem";
import type { ItemDetailModel } from "@/types/item/item";

type Props = {
  itemCode: string;
};
const ItemDetail = async ({ itemCode }: Props) => {
  const itemData: ItemDetailModel | null = await getItemDetail(itemCode);
  if (!itemData) return <NoItem />;

  return (
    <div className={styles.container}>
      <ItemInfo itemData={itemData} />
      <ItemDescription description={itemData.itemCaption} />
    </div>
  );
};

export default ItemDetail;

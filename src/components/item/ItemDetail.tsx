import ItemDescription from "./ItemDescription/ItemDescription";
import styles from "./ItemDetail.module.css";
import ItemInfo from "./ItemInfo/ItemInfo";
// typesディレクトリに移動する。
export type ItemDetailModel = {
  itemName: string;
  itemCode: string;
  itemPrice: string;
  itemImage: string;
  itemCaption: string[];
  shopCode: string;
  shopName: string;
  shopUrl: string;
};
type Props = {
  itemCode: string;
};
const ItemDetail = async ({ itemCode }: Props) => {
  const itemData: ItemDetailModel | null = await getItemDetail(itemCode);
  if (!itemData) return <p>アイテム情報を取得できませんでした。</p>;
  // console.log(itemData, "itemData");

  return (
    <div className={styles.container}>
      <ItemInfo itemData={itemData} />
      <ItemDescription description={itemData.itemCaption} />
    </div>
  );
};

export default ItemDetail;

export async function getItemDetail(itemCode: string) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/items/itemDetail?itemCode=${itemCode}`
    );
    if (!response.ok) {
      throw new Error("データを取得できませんでした。");
    }
    const itemDetail = await response.json();
    return itemDetail.item;
  } catch (error) {
    console.log(error);
    return null;
  }
}

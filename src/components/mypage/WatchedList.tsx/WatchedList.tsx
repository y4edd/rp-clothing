import Item from "@/components/top/Item/Item";
import type { History } from "@/types/history/history";
import styles from "./WatchedList.module.css";

type Props = {
  histories: History[];
};

const WatchedList = ({ histories }: Props) => {
  if (!histories.length) {
    return <p className={styles.message}>最近チェックしたアイテムがありません</p>;
  }

  return (
    <div className={styles.gridItems} >
      {histories.map((history: History,index) => {
        return (
          <Item
            key={index}
            itemCode={history.itemInfo?.itemCode}
            itemName={history.itemInfo?.itemName}
            itemPrice={history.itemInfo?.itemPrice}
            itemImage={history.itemInfo?.mediumImageUrls[0].imageUrl.replace("128x128", "250x250")}
          />
        );
      })}
    </div>
  );
};

export default WatchedList;

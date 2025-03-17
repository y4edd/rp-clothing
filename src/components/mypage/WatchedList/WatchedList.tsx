import Item from "@/components/top/Item/Item";
import type { History } from "@/types/history/history";
import styles from "./WatchedList.module.css";

type Props = {
  histories: History[];
  className?: string;
};

const WatchedList = ({ histories, className }: Props) => {
  if (!histories.length) {
    return <p className={styles.message}>最近チェックしたアイテムがありません</p>;
  }

  return (
    // <div className={styles.gridItems}>  {/*スライダーだったらスライダーの表示、そうじゃなかったら普通の表示*/}
    <div className={`${className === "slider" ? styles.slider : styles.gridItems}`}>
      {" "}
      {/*スライダーだったらスライダーの表示、そうじゃなかったら普通の表示 */}
      {histories.map((history: History) => {
        return (
          <Item
            key={history.itemInfo?.itemCode}
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

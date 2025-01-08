import Item from "../Item/Item";
import styles from "./NewItems.module.css";

const NewItems = () => {
  // MEMO アイテム情報取得したら消します
  const sampleArray = new Array(15).fill("").map((_, index) => index + 1);

  return (
    <div className={styles.container}>
      <h2 className={styles.contentTitle}>新着アイテム</h2>
      <div className={styles.gridItems}>
        {sampleArray.map((item) => (
          <Item key={item} linkPath="/" />
        ))}
      </div>
    </div>
  );
};

export default NewItems;

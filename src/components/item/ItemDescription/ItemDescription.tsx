import styles from "./ItemDescription.module.css"
const ItemDescription = () => {
  return (
    <div className={styles.container}>
      <p>
        商品説明 : テキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキスト
      </p>
    </div>
  );
};

export default ItemDescription;

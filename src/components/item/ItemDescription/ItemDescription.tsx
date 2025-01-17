import styles from "./ItemDescription.module.css"
const ItemDescription = () => {
  return (
    <div className={styles.container}>
      {/* テキストの長さによってスタイルを調整したいのでAPI作成後に調整します。 */}
      <p>
        商品説明 : テキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキスト
      </p>
    </div>
  );
};

export default ItemDescription;

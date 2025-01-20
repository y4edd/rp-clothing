import styles from "./ItemDescription.module.css";
type Props = {
  description: string;
};
const ItemDescription = ({ description }: Props) => {
  return (
    <div className={styles.container}>
      {/* テキストの長さによってスタイルを調整したいのでAPI作成後に調整します。 */}
      <p>商品説明 :{description}</p>
    </div>
  );
};

export default ItemDescription;

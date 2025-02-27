import styles from "./NoCartItems.module.css";

const NoCartItems = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>カートに商品が登録されていません</p>
    </div>
  );
};

export default NoCartItems;

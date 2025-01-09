import styles from "./PriceCondition.module.css";

const PriceCondition = () => {
  return (
    <>
      <div className={styles.price}>
        <h3>値段</h3>
        <div className={styles.priceCondition}>
          <form method="get" className={styles.price}>
            <input type="text" id="text" className={styles.priceEach} />
            ～
            <input type="text" id="text" className={styles.priceEach} />円
          </form>
        </div>
      </div>
    </>
  );
};

export default PriceCondition;

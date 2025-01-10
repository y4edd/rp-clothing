import styles from "./KeyWordCondition.module.css";

const KeyWordCondition = () => {
  return (
    <>
      <div className={styles.keyWordCondition}>
        <h3 className={styles.title}>キーワード</h3>
        <input type="text" id="キーワード" name="キーワード" className={styles.keyWord} />
      </div>
    </>
  );
};

export default KeyWordCondition;

import styles from "./CategoryCondition.module.css";

const CategoryCondition = () => {
  return (
    <>
      <h3>カテゴリ</h3>
      <div className={styles.category}>
        <div className={styles.categoryEach}>
          <input type="checkbox" id="トップス" name="トップス" />
          <label htmlFor="トップス">トップス</label>
        </div>
        <div className={styles.categoryEach}>
          <input type="checkbox" id="ズボン・パンツ" name="ズボン・パンツ" />
          <label htmlFor="ズボン・パンツ">ズボン・パンツ</label>
        </div>
        <div className={styles.categoryEach}>
          <input type="checkbox" id="スーツ・セットアップ" name="スーツ・セットアップ" />
          <label htmlFor="スーツ・セットアップ">スーツ・セットアップ</label>
        </div>
        <div className={styles.categoryEach}>
          <input type="checkbox" id="オーバーオール" name="オーバーオール" />
          <label htmlFor="オーバーオール">オーバーオール</label>
        </div>
        <div className={styles.categoryEach}>
          <input type="checkbox" id="レインウェア" name="レインウェア" />
          <label htmlFor="レインウェア">レインウェア</label>
        </div>
        <div className={styles.categoryEach}>
          <input type="checkbox" id="コート・ジャケット" name="コート・ジャケット" />
          <label htmlFor="コート・ジャケット">コート・ジャケット</label>
        </div>
      </div>
    </>
  )
}

export default CategoryCondition;

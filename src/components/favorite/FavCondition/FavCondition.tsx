import ConditionEditButtons from "../ConditionEditButtons/ConditionEditButtons";
import styles from "./FavCondition.module.css";

const FavCondition = () => {
  return (
    <div className={styles.conditionContainer}>
      <div className={styles.name}>ビンテージ市場</div>
      <div className={styles.condition}>値段：0〜4000円<br />カテゴリ：Tシャツ</div>
      <div className={styles.buttons}><ConditionEditButtons /></div>
    </div>
  )
}

export default FavCondition;
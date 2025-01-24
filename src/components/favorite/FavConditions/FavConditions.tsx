import ConditionEditButtons from "../ConditionEditButtons/ConditionEditButtons";
import FavCondition from "../FavCondition/FavCondition";
import styles from "./FavConditions.module.css";

const FavConditions = () => {

  return (
    <>
      <tr>
        <td>ビンテージ市場</td>
        <td>
          <dl>
            <dt>値段：0〜4000円</dt>
            <dt>カテゴリ：Tシャツ</dt>
            <dt>キーワード：allegri</dt>
          </dl>
        </td>
        <td>
          <ConditionEditButtons />
        </td>
      </tr>
      {/* <div className={styles.conditionList}>
        <FavCondition
          name="ビンテージ市場"
          minPrice="0"
          maxPrice="4000"
          category="Tシャツ"
          keyWord="allegri"
        />
        <ConditionEditButtons />
      </div>
      <div className={styles.conditionList}>
        <FavCondition
          name="軍パン（レギュラー）"
          minPrice="4000"
          maxPrice="16000"
          category="軍パン"
          keyWord="80s"
        />
        <ConditionEditButtons />
      </div>
      <div className={styles.conditionList}>
        <FavCondition
          name="プチプラ（出勤）"
          minPrice="0"
          maxPrice="6000"
          category="ジャケット・セットアップ"
          keyWord="オールシーズン"
        />
        <ConditionEditButtons />
      </div> */}
    </>
  );
};

export default FavConditions;

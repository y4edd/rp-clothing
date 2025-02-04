import type { FavConditionProps } from "@/types/search/search";
import ConditionEditButtons from "../ConditionEditButtons/ConditionEditButtons";
import styles from "./FavCondition.module.css";

const FavCondition = ({ conditionName, minPrice, maxPrice, selectedCategory, keyWord }: FavConditionProps) => {
  return (
    <>
      <tr className={styles.conditionList}>
        <td className={styles.conditionNameEach}>{conditionName}</td>
        <td className={styles.registerConditionEach}>
          <dl className={styles.conditions}>
            <dt>値段：</dt>
            <dd>
              {minPrice}〜{maxPrice}円
            </dd>
            <dt>カテゴリ：</dt>
            <dd>{selectedCategory}</dd>
            <dt>キーワード：</dt>
            <dd>{keyWord}</dd>
          </dl>
        </td>
        <td className={styles.conditionControlEach}>
          <ConditionEditButtons />
        </td>
      </tr>
    </>
  );
};

export default FavCondition;

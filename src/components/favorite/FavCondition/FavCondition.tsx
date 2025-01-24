import type { FavConditionProps } from "@/types/search/search";
import styles from "./FavCondition.module.css";
import ConditionEditButtons from "../ConditionEditButtons/ConditionEditButtons";

const FavCondition = ({ name, minPrice, maxPrice, category, keyWord }: FavConditionProps) => {
  return (
    <>
      <tr className={styles.conditionList}>
        <td className={styles.conditionNameEach}>{name}</td>
        <td className={styles.registerConditionEach}>
          <dl className={styles.conditions}>
            <dt>値段：</dt>
            <dd>{minPrice}〜{maxPrice}円</dd>
            <dt>カテゴリ：</dt>
            <dd>{category}</dd>
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

import type { FavConditionProps } from "@/types/search/search";
import { getCondition } from "@/utils/apiFunc";
import ConditionEditButtons from "../ConditionEditButtons/ConditionEditButtons";
import styles from "./FavConditions.module.css";

const FavConditions = async () => {
  const response = await getCondition();

  // API が失敗した場合のエラーチェック
  if (!response || !response.ok) {
    console.error(response);
    return <div>データの取得に失敗しました。</div>;
  }

  const conditions = await response.json();

  return (
    <>
      {conditions.map((condition: FavConditionProps) => (
        <tr className={styles.conditionList} key={condition.conditionName}>
          <td className={styles.conditionNameEach}>{condition.conditionName}</td>
          <td className={styles.registerConditionEach}>
            <dl className={styles.conditions}>
              <dt>値段：</dt>
              <dd>
                {condition.minPrice}〜{condition.maxPrice}円
              </dd>
              <dt>カテゴリ：</dt>
              <dd>{condition.selectedCategory}</dd>
              <dt>キーワード：</dt>
              <dd>{condition.keyWord}</dd>
            </dl>
          </td>
          <td className={styles.conditionControlEach}>
            <ConditionEditButtons condition={condition} />
          </td>
        </tr>
      ))}
    </>
  );
};

export default FavConditions;

import type { FavConditionProps } from "@/types/search/search";
import styles from "./FavCondition.module.css";

const FavCondition = ({ name, minPrice, maxPrice, category, keyWord }: FavConditionProps) => {
  return (
    <>
      <div className={styles.name}>{name}</div>
      <div className={styles.condition}>
        値段：{minPrice}〜{maxPrice}円<br />
        カテゴリ：{category}
        <br />
        キーワード：{keyWord}
      </div>
    </>
  );
};

export default FavCondition;

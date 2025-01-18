"use client";

import CloseIcon from '@mui/icons-material/Close';
import styles from "./SearchFilters.module.css";
import { SearchParamsProps } from '@/types/search/search';
import { categories } from '@/utils/data/category'; 

const SearchFilters = ({ searchParams }:{ searchParams?: SearchParamsProps }) => {
  const safeSearchParams = searchParams ?? {};

  const filteredParams = Object.entries(safeSearchParams).reduce(
    (acc, [key, value]) => {
      if (typeof value === "string") acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );

  if (!filteredParams) return null;

  // selectedCategoryの変換
  if (filteredParams.selectedCategory) {
    const category = categories.find(cat => cat.id === filteredParams.selectedCategory);
    filteredParams.selectedCategory = category ? category.text : filteredParams.selectedCategory;
  }

  // 条件を配列に変換し、値が存在する項目のみ保持する
  const conditions = [
    { label: `${Number(filteredParams.minPrice).toLocaleString()}円以上`, value: filteredParams.minPrice },
    { label: `${Number(filteredParams.maxPrice).toLocaleString()}円以下`, value: filteredParams.maxPrice },
    { label: filteredParams.selectedCategory, value: filteredParams.selectedCategory },
    { label: filteredParams.keyWord, value: filteredParams.keyWord },
  ].filter(condition => condition.value);

  const deleteCondition = () => {
    console.log("削除");
  };

  return (
    <>
      <div className={styles.filtersContainer}>
        <div className={styles.filtersTitle}>検索内容：</div>
        <div className={styles.filters}>
          {conditions.map((condition, index) => (
            <div className={styles.filter} key={index}>
              <p>{condition.label}</p>
              <button
                className={styles.deleteFilterButton}
                onClick={deleteCondition}
              >
                <CloseIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchFilters;

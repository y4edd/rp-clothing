"use client";

import CloseIcon from '@mui/icons-material/Close';
import styles from "./SearchFilters.module.css";
import { SearchParamsProps } from '@/types/search/search';
import { categories } from '@/utils/data/category'; 
import { fetchResults } from '@/utils/apiFunc';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify'; 

const SearchFilters = ({ searchParams }:{ searchParams?: SearchParamsProps }) => {
  const router = useRouter();
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

  const deleteCondition = async (label: string) => {
    // labelから削除対象のキーを特定する
    const keyToDelete = Object.keys(filteredParams).find(key => {
      const valueLabel = key === "minPrice"
        ? `${Number(filteredParams[key]).toLocaleString()}円以上`
        : key === "maxPrice"
        ? `${Number(filteredParams[key]).toLocaleString()}円以下`
        : filteredParams[key];
      return valueLabel === label;
    });

    if (keyToDelete) {
      if(keyToDelete === "selectedCategory") {
        toast.error("カテゴリーは検索条件から削除できません！", {
          autoClose: 1500,
        });
      } else {
        const params = new URLSearchParams(filteredParams);
        console.log(keyToDelete);
        // 正しいキーを削除
        params.delete(keyToDelete);
        await fetchResults(params.toString());
        router.push(`/search?${params}`);
      }
    }
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
                onClick={() => deleteCondition(condition.label)}
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

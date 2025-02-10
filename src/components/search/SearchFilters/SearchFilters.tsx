"use client";

import type { SearchParamsProps } from "@/types/search/search";
import { fetchResults } from "@/utils/apiFunc";
import { categories } from "@/utils/category";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import styles from "./SearchFilters.module.css";

const SearchFilters = ({ searchParams }: { searchParams?: SearchParamsProps }) => {
  const router = useRouter();
  const safeSearchParams = searchParams ?? {};

  const filteredParams = Object.entries(safeSearchParams).reduce(
    (acc, [key, value]) => {
      if (typeof value === "string") acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );

  // selectedCategoryの変換
  if (filteredParams.selectedCategory) {
    const category = categories.find((cat) => cat.id === filteredParams.selectedCategory);
    filteredParams.selectedCategory = category ? category.text : filteredParams.selectedCategory;
  }

  // 条件を配列に変換し、値が存在する項目のみ保持する
  const conditions = [
    {
      label: `${Number(filteredParams.minPrice).toLocaleString()}円以上`,
      value: filteredParams.minPrice,
    },
    {
      label: `${Number(filteredParams.maxPrice).toLocaleString()}円以下`,
      value: filteredParams.maxPrice,
    },
    { label: filteredParams.selectedCategory, value: filteredParams.selectedCategory },
    { label: filteredParams.keyWord, value: filteredParams.keyWord },
  ].filter((condition) => condition.value);

  const deleteCondition = async (label: string) => {
    // カテゴリーの日本語名から英語IDに変換する関数
    const convertCategoryToId = (label: string): string | undefined => {
      const category = categories.find((cat) => cat.text === label);
      return category?.id;
    };

    // labelから削除対象のキーを特定する
    const keyToDelete = Object.keys(filteredParams).find((key) => {
      const valueLabel =
        key === "minPrice"
          ? `${Number(filteredParams[key]).toLocaleString()}円以上`
          : key === "maxPrice"
            ? `${Number(filteredParams[key]).toLocaleString()}円以下`
            : filteredParams[key];
      return valueLabel === label;
    });

    if (keyToDelete) {
      const params = new URLSearchParams(filteredParams);
      // 正しいキーを削除
      params.delete(keyToDelete);
      // params 内の selectedCategory を日本語から英語IDに変換
      const selectedCategory = params.get("selectedCategory");
      if (selectedCategory) {
        const categoryId = convertCategoryToId(selectedCategory);
        if (categoryId) {
          params.set("selectedCategory", categoryId);
        }
      }
      await fetchResults(params.toString());
      router.push(`/search?${params}`);
    }
  };

  return (
    <>
      <div className={styles.filtersContainer}>
        <div className={styles.filtersTitle}>検索内容：</div>
        <div className={styles.filters}>
          {conditions.map((condition) => (
            <div className={styles.filter} key={condition.label}>
              <p>{condition.label}</p>
              <button
                type="button"
                className={styles.deleteFilterButton}
                data-testid={condition.label}
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

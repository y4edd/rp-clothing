"use client";
import type { RegisterAction } from "@/types/search/search";
import { categories } from "@/utils/category";
import React, { useCallback } from "react";
import Category from "../Category/Category";
import styles from "./CategoryCondition.module.css";

type Props = {
  selectedCategory: string;
  dispatch: (action: RegisterAction) => void;
};

const CategoryCondition = React.memo(({ selectedCategory, dispatch }: Props) => {
  // 関数にメモ化を行い、不要な再レンダリングを防ぐ
  const handleCategoryChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: "SET_CATEGORY", payload: e.target.value });
    },
    [dispatch],
  );

  return (
    <div className={styles.categoryCondition}>
      <h3 className={styles.title}>カテゴリ</h3>
      <div className={styles.category}>
        {categories.map((category) => (
          <Category
            key={category.id}
            id={category.id}
            text={category.text}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        ))}
      </div>
    </div>
  );
});

export default CategoryCondition;

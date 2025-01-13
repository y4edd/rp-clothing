"use client";
import { categories } from "@/utils/data/category";
import Category from "../Category/Category";
import styles from "./CategoryCondition.module.css";
import { Action } from "@/types/type";

type Props = {
  selectedCategory: string;
  dispatch: (action: Action) => void;
};

const CategoryCondition = ({ selectedCategory, dispatch }: Props) => {
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
            onCategoryChange={() => dispatch({ type: "SET_CATEGORY", payload: category.id })}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCondition;

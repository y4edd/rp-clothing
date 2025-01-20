import React from "react";
import styles from "./Category.module.css";

type CategoryProps = {
  id: string;
  text: string;
  selectedCategory: string;
  onCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Category = React.memo(
  ({ id, text, selectedCategory, onCategoryChange }: CategoryProps) => {
    return (
      <div className={styles.categoryEach}>
        <input
          type="radio"
          id={id}
          name={id}
          value={id}
          className={styles.genreCheck}
          checked={selectedCategory === id}
          onChange={onCategoryChange}
        />
        <label htmlFor={id} className={styles.genre}>
          {text}
        </label>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // selectedCategoryが変わっても、このCategoryのidに関係なければ再レンダリングしない
    return (
      prevProps.selectedCategory === nextProps.selectedCategory && prevProps.id === nextProps.id
    );
  },
);

export default Category;

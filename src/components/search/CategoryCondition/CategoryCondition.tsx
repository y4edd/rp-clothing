import Category from "../Category/Category";
import styles from "./CategoryCondition.module.css";
import { categories } from "@/utils/data/category";

const CategoryCondition = () => {
  return (
    <div className={styles.categoryCondition}>
      <h3>カテゴリ</h3>
      <div className={styles.category}>
        {categories.map((category) => (
          <Category key={category.id} id={category.id} name={category.name} htmlFor={category.id} text={category.text} />
        ))}
      </div>
    </div>
  );
};

export default CategoryCondition;

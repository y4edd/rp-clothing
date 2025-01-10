import { categories } from "@/utils/data/category";
import Category from "../Category/Category";
import styles from "./CategoryCondition.module.css";

const CategoryCondition = () => {
  return (
    <div className={styles.categoryCondition}>
      <h3 className={styles.title}>カテゴリ</h3>
      <div className={styles.category}>
        {categories.map((category) => (
          <Category key={category.id} id={category.id} text={category.text} />
        ))}
      </div>
    </div>
  );
};

export default CategoryCondition;

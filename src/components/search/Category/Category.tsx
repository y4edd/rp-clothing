import styles from "./Category.module.css";

type CategoryProps = {
  id: string;
  text: string;
  selectedCategory: string;
  onCategoryChange: () => void;
};

const Category = ({ id, text, selectedCategory, onCategoryChange }: CategoryProps) => {
  return (
    <div className={styles.categoryEach}>
      <input
        type="radio"
        id={id}
        name="category"
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
};

export default Category;

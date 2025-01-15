import styles from "./Category.module.css";

type CategoryProps = {
  id: string;
  text: string;
};

const Category = ({ id, text }: CategoryProps) => {
  return (
    <div className={styles.categoryEach}>
      <input type="radio" id={id} name="category" value={id} className={styles.genreCheck} />
      <label htmlFor={id} className={styles.genre}>
        {text}
      </label>
    </div>
  );
};

export default Category;

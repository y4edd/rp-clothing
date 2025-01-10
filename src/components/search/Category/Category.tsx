import styles from "./Category.module.css";

type CategoryProps = {
  id: string;
  htmlFor: string;
  text: string;
};

const Category = ({ id, htmlFor, text }: CategoryProps) => {
  return (
    <>
      <div className={styles.categoryEach}>
        <input type="radio" id={id} name="category" value={id} className={styles.genreCheck} />
        <label htmlFor={htmlFor} className={styles.genre}>
          {text}
        </label>
      </div>
    </>
  );
};

export default Category;

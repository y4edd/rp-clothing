import styles from "./Category.module.css";

type CategoryProps = {
  id: string;
  name: string;
  htmlFor: string;
  text: string;
};

const Category = ({ id, name, htmlFor, text }: CategoryProps) => {
  return (
    <>
      <div className={styles.categoryEach}>
        <input type="checkbox" id={id} name={name} value={id} className={styles.genreCheck} />
        <label htmlFor={htmlFor} className={styles.genre}>
          {text}
        </label>
      </div>
    </>
  );
};

export default Category;

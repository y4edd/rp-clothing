import styles from "./WordSearch.module.css";
import Button from "./button/Button";

const WordSearch = () => {
  return (
    <>
      <form method="get" className={styles.searchForm}>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="何かお探しですか？"
          aria-label="検索ボックス"
        />
        <Button />
      </form>
    </>
  );
};

export default WordSearch;

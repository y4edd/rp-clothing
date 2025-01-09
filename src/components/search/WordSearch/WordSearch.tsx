import WordSearchButton from "../WordSearchButton/WordSearchButton";
import styles from "./WordSearch.module.css";

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
        <WordSearchButton />
      </form>
    </>
  );
};

export default WordSearch;

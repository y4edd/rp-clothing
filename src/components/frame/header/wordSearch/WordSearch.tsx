import SearchIcon from "@mui/icons-material/Search";
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
        <button type="submit" aria-label="検索">
          <SearchIcon />
        </button>
      </form>
    </>
  );
};

export default WordSearch;

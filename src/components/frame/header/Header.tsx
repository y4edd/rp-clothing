import Link from "next/link";
import WordSearch from "./wordSearch/WordSearch";
import styles from "./Header.module.css";
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.container}>
        <WordSearch />
      </div>
      <div className={styles.title}>
        <p>RPclothing</p>
      </div>
      <div className={styles.navigationContainer}>
        <Link href="/login" className={styles.login}>ログイン</Link>
        <button type="button" aria-label="Search">
          <SearchIcon />
        </button>
      </div>  
    </div>
  );
}

export default Header;

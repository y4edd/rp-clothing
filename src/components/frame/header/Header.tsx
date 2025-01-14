import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import styles from "./Header.module.css";
import WordSearch from "./wordSearch/WordSearch";

const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.container}>
          <WordSearch />
        </div>
        <div className={styles.title}>
          <p>RPclothing</p>
        </div>
        {/* MEMO: 未ログイン時はこちらが表示されます */}
        {/* <div className={styles.navigationContainer}>
          <Link href="/login" className={styles.login}>ログイン</Link>
          <button type="button" aria-label="Search">
            <SearchIcon />
          </button>
        </div> */}
        {/* MEMO: ログイン済みの際はこちらが表示されます */}
        <div className={styles.navigationContainer}>
          <Link href="/login" className={styles.login}>
            ログイン
          </Link>
          <button type="button" aria-label="Search">
            <FavoriteBorderIcon />
          </button>
          <button type="button" aria-label="Search">
            <SearchIcon />
          </button>
          <button type="button" aria-label="Search">
            <ShoppingCartIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

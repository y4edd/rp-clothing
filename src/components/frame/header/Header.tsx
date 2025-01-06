import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import BreadList from "../breadList/BreadList";
import PageTitle from "../pageTitle/PageTitle";
import styles from "./Header.module.css";
import WordSearch from "./wordSearch/WordSearch";

const Header = () => {
  const search = () => {
    console.log("search");
  };
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
          <button type="button" aria-label="Search" onClick={search}>
            <SearchIcon />
          </button>
          <button type="button" aria-label="Search">
            <ShoppingCartIcon />
          </button>
        </div>
      </div>
      {/* MEMO: 削除予定。
      // ページコンポーネント毎にBreadListとPageTitleをインポートしpropsで渡してもらいます */}
      <div>
        <BreadList bread={[{ link: "/", title: "トップ" }]} />
      </div>
      <div>
        <PageTitle title={"トップ"} />
      </div>
    </>
  );
};

export default Header;

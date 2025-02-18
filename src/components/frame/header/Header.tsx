import CartButton from "../../cart/CartButton/CartButton";
import ToFavoriteButton from "@/components/favorite/toFavoriteButton/ToFavoriteButton";
import SearchButton from "@/components/search/SearchButton/SearchButton";
import Link from "next/link";
import WordSearch from "../../search/WordSearch/WordSearch";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.container}>
          <WordSearch />
        </div>
        <div className={styles.title}>
          <Link href="/">
            <p>RPclothing</p>
          </Link>
        </div>
        {/* MEMO: 未ログイン時はこちらが表示されます */}
        {/* <div className={styles.navigationContainer}>
          <Link href="/login" className={styles.login}>ログイン</Link>
          <SearchButton />
        </div> */}
        {/* MEMO: ログイン済みの際はこちらが表示されます */}
        <div className={styles.navigationContainer}>
          <Link href="/user/login" className={styles.login}>
            ログイン
          </Link>
          <ToFavoriteButton />
          <SearchButton />
          <CartButton />
        </div>
      </div>
    </>
  );
};

export default Header;

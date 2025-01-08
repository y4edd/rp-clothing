import CartButton from "@/components/cart/cartButton/CartButton";
import ToFavoriteButton from "@/components/favorite/toFavoriteButton/ToFavoriteButton";
import SearchButton from "@/components/search/filterSearch/button/SearchButton/SearchButton";
import Link from "next/link";
import WordSearch from "../../search/wordSearch/WordSearch";
import BreadList from "../breadList/BreadList";
import PageTitle from "../pageTitle/PageTitle";
import styles from "./Header.module.css";

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
          <SearchButton />
        </div> */}
        {/* MEMO: ログイン済みの際はこちらが表示されます */}
        <div className={styles.navigationContainer}>
          <Link href="/login" className={styles.login}>
            ログイン
          </Link>
          <ToFavoriteButton />
          <SearchButton />
          <CartButton />
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

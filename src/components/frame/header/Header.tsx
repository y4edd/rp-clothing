"use client";

import ToCartButton from "@/components/cart/ToCartButton/ToCartButton";
import ToFavoriteButton from "@/components/favorite/toFavoriteButton/ToFavoriteButton";
import SearchButton from "@/components/search/SearchButton/SearchButton";
import { fetchUserId } from "@/utils/apiFunc";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import WordSearch from "../../search/WordSearch/WordSearch";
import styles from "./Header.module.css";

const Header = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // App Routerのルート取得
  // ログイン操作の際、ページ移動のたびにこの値が変わるので、
  // それを再レンダリングのきっかけに使う
  const pathname = usePathname();

  // 初回マウントとルート変更時に発火
  // biome-ignore lint/correctness/useExhaustiveDependencies:
  useEffect(() => {
    const getUserId = async () => {
      setLoading(true);
      const { userId, error } = await fetchUserId();
      setUserId(userId);
      setError(error);
      setLoading(false);
    };

    getUserId();
  }, [pathname]);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.container}>
        <WordSearch />
      </div>

      <div className={styles.title}>
        <Link href="/">
          <p>RPclothing</p>
        </Link>
      </div>

      <div className={styles.navigationContainer}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className={styles.error}>{error}</p>
        ) : userId ? (
          <>
            <Link href="/mypage" className={styles.mypage}>
              マイページ
            </Link>
            <ToFavoriteButton />
            <SearchButton />
            <ToCartButton />
          </>
        ) : (
          <>
            <Link href="/user/login" className={styles.login}>
              ログイン
            </Link>
            <SearchButton />
            <ToCartButton />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
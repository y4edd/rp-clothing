"use client";

import ToCartButton from "@/components/cart/ToCartButton/ToCartButton";
import ToFavoriteButton from "@/components/favorite/toFavoriteButton/ToFavoriteButton";
import SearchButton from "@/components/search/SearchButton/SearchButton";
import Link from "next/link";
import WordSearch from "../../search/WordSearch/WordSearch";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // App Routerのルート取得
  // ログイン操作の際、ページ移動のたびにこの値が変わるので、
  // それを再レンダリングのきっかけに使う
  const pathname = usePathname();

  // ユーザー情報を取得する関数
  const fetchUserId = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/user/token", {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      });

      if (!res.ok) {
        setUserId(null);
        return;
      }

      const data = await res.json();
      setUserId(data.userId);
    } catch (err) {
      console.error("API 呼び出しエラー:", err);
      setError("サーバーエラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  // 初回マウントとルート変更時に発火
  useEffect(() => {
    setLoading(true);
    fetchUserId();
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

"use client";

import WordSearchButton from "../WordSearchButton/WordSearchButton";
import styles from "./WordSearch.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const WordSearch = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  // 検索ボタン押下時の処理
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?keyWord=${value}`);
  };

  return (
    <>
      <form method="get" className={styles.searchForm} onSubmit={handleSearch}>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="何かお探しですか？"
          aria-label="検索ボックス"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <WordSearchButton />
      </form>
    </>
  );
};

export default WordSearch;

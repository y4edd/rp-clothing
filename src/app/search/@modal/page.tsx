"use client";

import Modal from "@/components/Modal/Modal";
import SearchStartButton from "@/components/search/SearchStartButton/SearchStartButton";
import styles from "./page.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { State } from "@/types/type";
import { Action } from "@/types/type";
import { useReducer, useState } from "react";
import dynamic from "next/dynamic";
import FavConditions from "@/components/search/FavConditions/FavConditions";
import PriceCondition from "@/components/search/PriceCondition/PriceCondition";
import CategoryCondition from "@/components/search/CategoryCondition/CategoryCondition";
import KeyWordCondition from "@/components/search/KeyWordCondition/KeyWordCondition";

const reducer = (state: State, action: Action) => {
  console.log(`Action: ${action.type}, Payload: ${action.payload}`);
  switch (action.type) {
    case "SET_MIN_PRICE":
      return { ...state, minPrice: action.payload };
    case "SET_MAX_PRICE":
      return { ...state, maxPrice: action.payload };
    case "SET_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "SET_KEYWORD":
        return { ...state, keyWord: action.payload };
    default:
      return state;
  }
};

// 検索条件を管理する初期化関数
const initialState = (searchParams: URLSearchParams) => ({
  minPrice: searchParams.get("minPrice") || "",
  maxPrice: searchParams.get("maxPrice") || "",
  selectedCategory: searchParams.get("category") || "",
  keyWord: searchParams.get("keyword") || "",
});

const SearchModalComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // useReducer の第3引数に初期化関数を渡す
  const [state, dispatch] = useReducer(reducer, searchParams, initialState);

  // モーダルの開閉状態
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 検索ボタンを押した時にURLを更新
  const handleSearch = () => {
    // stateから空の値を除外
    const queryObj = Object.entries(state).reduce((acc, [key, value]) => {
      if (value !== "") {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, string>);

    const query = new URLSearchParams(queryObj).toString();
    router.push(`/search?${query}`);
    setIsModalOpen(false);
  };

  return (
    <Modal>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>検索条件</h2>
        <div className={styles.searchConditions}>
          <FavConditions />
          <PriceCondition minPrice={state.minPrice} maxPrice={state.maxPrice} dispatch={dispatch}/>
          <CategoryCondition selectedCategory={state.selectedCategory} dispatch={dispatch}/>
          <KeyWordCondition />
          <SearchStartButton onSearch={handleSearch} />
        </div>
      </div>
    </Modal>
  );
};

// dynamicを使ってSearchModalComponentを動的にインポートする
// { ssr: false }にすることで、サーバーサイドレンダリングを無効化（クライアント側でのみレンダリング）
const SearchModal = dynamic(() => Promise.resolve(SearchModalComponent), { ssr: false });

export default SearchModal;

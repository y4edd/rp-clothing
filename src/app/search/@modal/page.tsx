"use client";

import Modal from "@/components/Modal/Modal";
import SearchStartButton from "@/components/search/SearchStartButton/SearchStartButton";
import styles from "./page.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { State } from "@/types/type";
import { Action } from "@/types/type";
import { useEffect, useReducer, useState, useMemo } from "react";
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
  const [state, dispatch] = useReducer(reducer, searchParams, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // ページ遷移時にモーダルを開く
  // 新しく渡ってくるクエリの有無でモーダル開閉を管理
  useEffect(() => {
    if (!searchParams.toString()) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [searchParams]);
  
  

  // stateの変更をリアルタイムでqueryに反映
  const query = useMemo(() => {
    const queryObj = Object.entries(state).reduce((acc, [key, value]) => {
      if (value !== "") acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

    return new URLSearchParams(queryObj).toString();
  }, [state]);

  // モーダルを閉じる処理
  const closeModal = () => {
    setIsModalOpen(false);
    router.push(query ? `/search?${query}` : "/");
  };

  // 検索ボタン押下時の処理
  const handleSearch = () => {
    if (!query) {
      setErrorMessage("検索条件が入力されていません");
      return;
    }
    setIsModalOpen(false);
    console.log(isModalOpen);
    router.push(`/search?${query}`);
  };

  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>検索条件</h2>
            <div className={styles.searchConditions}>
              <FavConditions />
              <PriceCondition minPrice={state.minPrice} maxPrice={state.maxPrice} dispatch={dispatch} />
              <CategoryCondition selectedCategory={state.selectedCategory} dispatch={dispatch} />
              <KeyWordCondition />
              <SearchStartButton onSearch={() => handleSearch()} />
              <div className={styles.errorMessage}>{errorMessage}</div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

// dynamicを使ってSearchModalComponentを動的にインポートする
const SearchModal = dynamic(() => Promise.resolve(SearchModalComponent), { ssr: false });

export default SearchModal;

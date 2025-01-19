"use client";

import Modal from "@/components/Modal/Modal";
import CategoryCondition from "@/components/search/CategoryCondition/CategoryCondition";
import FavConditions from "@/components/search/FavConditions/FavConditions";
import KeyWordCondition from "@/components/search/KeyWordCondition/KeyWordCondition";
import PriceCondition from "@/components/search/PriceCondition/PriceCondition";
import SearchStartButton from "@/components/search/SearchStartButton/SearchStartButton";
import type { State } from "@/types/search/search";
import type { Action } from "@/types/search/search";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useReducer, useState } from "react";
import styles from "./SearchModal.module.css"

const reducer = (state: State, action: Action) => {
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
    const queryObj = Object.entries(state).reduce(
      (acc, [key, value]) => {
        if (value !== "") acc[key] = value;
        return acc;
      },
      {} as Record<string, string>,
    );
    return new URLSearchParams(queryObj).toString();
  }, [state]);

  // モーダルを閉じる処理
  const closeModal = () => {
    router.push(query ? `/search?${query}` : "/");
  };

  // 検索ボタン押下時の処理
  const handleSearch = () => {
    if (!query) {
      setErrorMessage("検索条件が入力されていません");
      return;
    } else {
      setIsModalOpen(false);
      router.push(`/search?${query}`);
    }
  };

  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>検索条件</h2>
            <div className={styles.searchConditions}>
              <FavConditions />
              <PriceCondition
                minPrice={state.minPrice}
                maxPrice={state.maxPrice}
                dispatch={dispatch}
              />
              <CategoryCondition selectedCategory={state.selectedCategory} dispatch={dispatch} />
              <KeyWordCondition keyWord={state.keyWord} dispatch={dispatch} />
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

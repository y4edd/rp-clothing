"use client";

import Modal from "@/components/Modal/Modal";
import CategoryCondition from "@/components/search/CategoryCondition/CategoryCondition";
import KeyWordCondition from "@/components/search/KeyWordCondition/KeyWordCondition";
import PriceCondition from "@/components/search/PriceCondition/PriceCondition";
import SearchStartButton from "@/components/search/SearchStartButton/SearchStartButton";
import { reducer } from "@/reducer/reducer";
import { initialState } from "@/reducer/reducer";
import type { FavConditionProps } from "@/types/search/search";
import { getCondition } from "@/utils/apiFunc";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useReducer, useState } from "react";
import SearchFavConditions from "../SearchFavConditions/SearchFavConditions";
import styles from "./SearchModal.module.css";

type SearchModalProps = {
  userId: string;
}
const SearchModal = ({userId}: SearchModalProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, dispatch] = useReducer(reducer, searchParams, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [favConditions, setFavConditions] = useState<FavConditionProps[]>([]);

  // ページ遷移時にモーダルを開く
  // 新しく渡ってくるクエリの有無でモーダル開閉を管理
  useEffect(() => {
    if (!searchParams.toString()) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [searchParams]);

  // 初回レンダリングと同時にお気に入り条件を取得する
  useEffect(() => {
    const fetchConditions = async () => {
      const response = await getCondition(userId);
      if (response) {
        const res: FavConditionProps[] = await response.json();
        setFavConditions(res);
      }
    };
    fetchConditions();
  }, []);

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
    router.back();
  };

  // 検索ボタン押下時の処理
  const handleSearch = () => {
    if (!query) {
      setErrorMessage("検索条件が入力されていません");
      return;
    }

    if (state.maxPrice !== "") {
      if (Number(state.minPrice) > Number(state.maxPrice)) {
        setErrorMessage("金額の入力が正しくありません！");
        return;
      }
    }
    // 検索ページへ遷移
    router.push(`/search?${query}`);
  };

  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>検索条件</h2>
            <div className={styles.searchConditions}>
              <SearchFavConditions favConditions={favConditions} />
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

export default SearchModal;

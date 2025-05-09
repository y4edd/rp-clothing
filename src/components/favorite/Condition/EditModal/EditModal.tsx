"use client";

import Modal from "@/components/Modal/Modal";
import ConditionName from "@/components/favorite/Condition/ConditionName/ConditionName";
import RegisterButton from "@/components/favorite/Condition/RegisterButton/RegisterButton";
import CategoryCondition from "@/components/search/CategoryCondition/CategoryCondition";
import KeyWordCondition from "@/components/search/KeyWordCondition/KeyWordCondition";
import PriceCondition from "@/components/search/PriceCondition/PriceCondition";
import { registerInitialState, registerReducer } from "@/reducer/reducer";
import { useRouter, useSearchParams } from "next/navigation";
import { useReducer, useState } from "react";
import styles from "./EditModal.module.css";

type EditModalProps = {
  userId: string;
};

const EditModal: React.FC<EditModalProps> = ({ userId }: EditModalProps) => {
  const searchParams = useSearchParams();
  const [state, dispatch] = useReducer(registerReducer, searchParams, registerInitialState);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  // searchConditionIdをクエリから受け取る
  const searchConditionIdString = searchParams.get("searchConditionId");
  const searchConditionId = searchConditionIdString ? Number(searchConditionIdString) : undefined;

  // モーダルを閉じる処理
  const closeModal = () => {
    router.back();
  };

  // 条件名のバリデーション関数
  const validateConditionName = () => {
    if (!state.conditionName.trim()) {
      setErrorMessage("条件名は必須です！");
      return false;
    }
    if (state.conditionName.trim().length >= 15) {
      setErrorMessage("条件名は15文字以内です!");
      return false;
    }
    return true;
  };

  return (
    <>
      {/* Next.js の自動トップスクロールを防ぐためのダミー要素
      → Next.js ではページ遷移時にデフォルトでトップにスクロールされるが、これを防ぐために使用 */}
      <div />
      <Modal onClose={closeModal}>
        <div className={styles.modalContent}>
          <h2>お気に入り条件編集</h2>
          <div className={styles.searchConditions}>
            <ConditionName dispatch={dispatch} conditionName={state.conditionName} />
            <PriceCondition
              minPrice={state.minPrice}
              maxPrice={state.maxPrice}
              dispatch={dispatch}
            />
            <CategoryCondition selectedCategory={state.selectedCategory} dispatch={dispatch} />
            <KeyWordCondition keyWord={state.keyWord} dispatch={dispatch} />
            <RegisterButton
              buttonType="edit"
              state={state}
              validate={validateConditionName}
              searchConditionId={searchConditionId}
              userId={userId}
            />
            <div className={styles.errorMessage}>{errorMessage}</div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditModal;

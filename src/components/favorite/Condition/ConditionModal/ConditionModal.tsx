"use client";

import Modal from "@/components/Modal/Modal";
import CategoryCondition from "@/components/search/CategoryCondition/CategoryCondition";
import KeyWordCondition from "@/components/search/KeyWordCondition/KeyWordCondition";
import PriceCondition from "@/components/search/PriceCondition/PriceCondition";
import { registerInitialState, registerReducer } from "@/reducer/reducer";
import type { ModalProps } from "@/types/modal";
import { useReducer, useState } from "react";
import ConditionName from "../ConditionName/ConditionName";
import RegisterButton from "../RegisterButton/RegisterButton";
import styles from "./ConditionModal.module.css";

const ConditionModal: React.FC<ModalProps> = ({ closeModal, modalTitle, searchConditionId }) => {
  const [state, dispatch] = useReducer(registerReducer, registerInitialState);
  const [errorMessage, setErrorMessage] = useState("");

  // モーダルのタイトルでボタンの種類を決定
  const buttonType = modalTitle === "お気に入り条件登録" ? "register" : "edit";

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
    <Modal onClose={closeModal}>
      <div className={styles.modalContent}>
        <h2>{modalTitle}</h2>
        <div className={styles.searchConditions}>
          <ConditionName dispatch={dispatch} />
          <PriceCondition minPrice={state.minPrice} maxPrice={state.maxPrice} dispatch={dispatch} />
          <CategoryCondition selectedCategory={state.selectedCategory} dispatch={dispatch} />
          <KeyWordCondition keyWord={state.keyWord} dispatch={dispatch} />
          <RegisterButton
            buttonType={buttonType}
            state={state}
            validate={validateConditionName}
            searchConditionId={searchConditionId}
          />
          <div className={styles.errorMessage}>{errorMessage}</div>
        </div>
      </div>
    </Modal>
  );
};

export default ConditionModal;

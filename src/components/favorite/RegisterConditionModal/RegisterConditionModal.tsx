"use client";

import Modal from "@/components/Modal/Modal";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./RegisterConditionModal.module.css";
import { useReducer, useState } from "react";
import PriceCondition from "@/components/search/PriceCondition/PriceCondition";
import CategoryCondition from "@/components/search/CategoryCondition/CategoryCondition";
import KeyWordCondition from "@/components/search/KeyWordCondition/KeyWordCondition";
import { registerInitialState, registerReducer } from "@/reducer/reducer";
import ConditionName from "../ConditionName/ConditionName";
import RegisterButton from "../RegisterButton/RegisterButton";

type ModalProps = {
  closeModal: () => void;
};

const RegisterConditionModal: React.FC<ModalProps> = ({closeModal}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, dispatch] = useReducer(registerReducer, searchParams, registerInitialState);
  const [errorMessage, setErrorMessage] = useState("");

  // 登録ボタン押下時の処理
  const handleSearch = () => {
    console.log("押された");
  };

  return (
    <>
      <Modal onClose={closeModal}>
        <div className={styles.modalContent}>
          <h2>お気に入り条件登録</h2>
          <div className={styles.searchConditions}>
            <ConditionName conditionName={state.conditionName} dispatch={dispatch} />
            <PriceCondition
              minPrice={state.minPrice}
              maxPrice={state.maxPrice}
              dispatch={dispatch}
            />
            <CategoryCondition selectedCategory={state.selectedCategory} dispatch={dispatch} />
            <KeyWordCondition keyWord={state.keyWord} dispatch={dispatch} />
            <RegisterButton onSearch={() => handleSearch()}/>
            <div className={styles.errorMessage}>{errorMessage}</div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RegisterConditionModal;
"use client";

import Modal from "@/components/Modal/Modal";
import CategoryCondition from "@/components/search/CategoryCondition/CategoryCondition";
import KeyWordCondition from "@/components/search/KeyWordCondition/KeyWordCondition";
import PriceCondition from "@/components/search/PriceCondition/PriceCondition";
import { registerInitialState, registerReducer } from "@/reducer/reducer";
import { useSearchParams } from "next/navigation";
import { useEffect, useReducer, useState } from "react";
import ConditionName from "../ConditionName/ConditionName";
import RegisterButton from "../RegisterButton/RegisterButton";
import styles from "./ConditionModal.module.css";
import { postCondition } from "@/utils/apiFunc";
import { useForm } from "react-hook-form";
import { FormProps } from "@/types/user/user";
import { type ModalProps } from "@/types/modal";

const ConditionModal: React.FC<ModalProps> = ({ closeModal, modalTitle }) => {
  const searchParams = useSearchParams();
  const [state, dispatch] = useReducer(registerReducer, searchParams, registerInitialState);
  const [errorMessage, setErrorMessage] = useState("");
  const { register, setValue } = useForm<FormProps>();

  useEffect(() => {
    setValue("conditionName", state.conditionName);
  }, [state.conditionName, setValue]);

  // 登録ボタン押下時の処理
  const handleSearch = () => {
    if (!state.conditionName.trim()) {
      setErrorMessage("条件名は必須です！");
    } else if (state.conditionName.trim().length >= 15 ) {
      setErrorMessage("条件名は15文字以内です!");
    } else {
      postCondition(state);
      closeModal();
    }
  };

  return (
    <>
      <Modal onClose={closeModal}>
        <div className={styles.modalContent}>
          <h2>{modalTitle}</h2>
          <div className={styles.searchConditions}>
            <ConditionName dispatch={dispatch} register={register} />
            <PriceCondition
              minPrice={state.minPrice}
              maxPrice={state.maxPrice}
              dispatch={dispatch}
            />
            <CategoryCondition selectedCategory={state.selectedCategory} dispatch={dispatch} />
            <KeyWordCondition keyWord={state.keyWord} dispatch={dispatch} />
            <RegisterButton onSearch={() => handleSearch()} />
            <div className={styles.errorMessage}>{errorMessage}</div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ConditionModal;

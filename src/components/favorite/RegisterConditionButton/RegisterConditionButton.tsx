"use client";
import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css";
import { useState } from "react";
import RegisterConditionModal from "../RegisterConditionModal/RegisterConditionModal";
import styles from "./RegisterConditionButton.module.css";

const RegisterConditionButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toRegisterCondition = () => {
    setIsModalOpen(true);
  };

  // モーダルを閉じる処理
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.registerButton}>
        <Button
          type="button"
          onClick={toRegisterCondition}
          className={buttonStyles.black}
          text="お気に入り条件を登録する"
        />
      </div>
      {isModalOpen && <RegisterConditionModal closeModal={closeModal} />}
    </>
  );
};

export default RegisterConditionButton;

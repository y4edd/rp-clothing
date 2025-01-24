"use client";
import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css";
import styles from "./RegisterConditionButton.module.css";
import RegisterConditionModal from "../RegisterConditionModal/RegisterConditionModal";
import { useState } from "react";

const RegisterConditionButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toRegisterCondition = () => {
    setIsModalOpen(true);
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
        {isModalOpen && (
          <RegisterConditionModal />
        )}
    </>
  );
};

export default RegisterConditionButton;

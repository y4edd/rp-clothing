"use client";
import Button from "@/components/utils/button/Button"
import buttonStyles from "@/components/utils/button/Button.module.css"
import styles from "./RegisterConditionButton.module.css";

const RegisterConditionButton = () => {
  const toRegisterCondition = () => {
    // MEMO: のちに実装(2025/1/22記載)
    console.log("登録ボタンがクリックされました");
  };

  return (
    <div className={styles.registerButton}>
      <Button
        type="button"
        onClick={toRegisterCondition}
        className={buttonStyles.black}
        text="お気に入り条件を登録する"
      />
    </div>
  )
}

export default RegisterConditionButton



"use client";
import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css";
import styles from "./RegisterConditionButton.module.css";
import { useRouter } from "next/navigation";

const RegisterConditionButton = () => {
  const router = useRouter();

  const toRegisterCondition = () => {
    router.push("/mypage/searchCondition/register");
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
  );
};

export default RegisterConditionButton;

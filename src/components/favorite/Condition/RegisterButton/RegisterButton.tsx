"use client";

import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css";
import type { FavConditionProps } from "@/types/search/search";
import { editCondition, postCondition } from "@/utils/apiFunc";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./RegisterButton.module.css";

type RegisterButtonProps = {
  buttonType: "register" | "edit";
  state: FavConditionProps;
  validate: () => boolean;
  searchConditionId?: number | undefined;
  userId: string;
};

const RegisterButton: React.FC<RegisterButtonProps> = ({
  buttonType,
  state,
  validate,
  searchConditionId,
  userId,
}) => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string>("");

  // ボタン押下時の処理
  const handleClick = async () => {
    if (!validate()) return;

    try {
      const response =
        buttonType === "register"
          ? await postCondition(state, userId)
          : await editCondition(state, searchConditionId, userId);

      if (!response) {
        return;
      }
      const res = await response.json();
      if (!response.ok) {
        setServerError(res.message);
      }
      router.push("/mypage/search/condition");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Button text={"検索条件を登録"} onClick={handleClick} className={buttonStyles.black} />
      <div className={styles.errorMessage}>{serverError}</div>
    </>
  );
};

export default RegisterButton;

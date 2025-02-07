"use client";

import Button from "@/components/utils/button/Button";
import { editCondition, postCondition } from "@/utils/apiFunc";
import buttonStyles from "@/components/utils/button/Button.module.css";
import { FavConditionProps } from "@/types/search/search";
import { useRouter } from "next/navigation";
import { useState } from "react";

type RegisterButtonProps = {
  buttonType: "register" | "edit";
  state: FavConditionProps;
  validate: () => boolean;
  searchConditionId: number | undefined;
};

const RegisterButton: React.FC<RegisterButtonProps> = ({
  buttonType,
  state,
  validate,
  searchConditionId,
}) => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  // ボタン押下時の処理
  const handleClick = async () => {
    if (!validate()) return;

    try {
      const response = buttonType === "register"
      ? await postCondition(state)
      : await editCondition(state, searchConditionId);

      if (!response) {
        return;
      }

      const error = await response.json();
      setServerError(error.message);
      router.push("/mypage/searchCondition");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button text={"検索条件を登録"} onClick={handleClick} className={buttonStyles.black} />
      {serverError}
    </>
  );
};

export default RegisterButton;

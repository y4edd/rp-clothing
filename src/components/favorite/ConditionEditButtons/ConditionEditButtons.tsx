"use client";

import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css"

const ConditionEditButtons = () => {
  const toEdit = () => {
    console.log("編集がクリックされました");
  };
  const deleteCondition = () => {
    console.log("削除がクリックされました");
  };

  return (
    <>
      <Button type="button" onClick={toEdit} className={buttonStyles.white} text="変更" />
      <Button type="button" onClick={deleteCondition} className={buttonStyles.white} text="削除" />
    </>
  );
}

export default ConditionEditButtons;
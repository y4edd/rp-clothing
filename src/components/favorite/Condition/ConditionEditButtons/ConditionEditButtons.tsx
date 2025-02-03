"use client";

import Button from "@/components/utils/button/Button";
import styles from "./ConditionEditButtons.module.css";

const ConditionEditButtons = () => {
  const toEdit = () => {
    console.log("編集がクリックされました");
  };
  const deleteCondition = () => {
    console.log("削除がクリックされました");
  };

  return (
    <div className={styles.buttons}>
      <div className={styles.editButton}>
        <Button type="button" onClick={toEdit} className={styles.white} text="編集" />
      </div>
      <div className={styles.deleteButton}>
        <Button type="button" onClick={deleteCondition} className={styles.white} text="削除" />
      </div>
    </div>
  );
};

export default ConditionEditButtons;

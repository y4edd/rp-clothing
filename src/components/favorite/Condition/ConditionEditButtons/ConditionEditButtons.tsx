"use client";

import Button from "@/components/utils/button/Button";
import styles from "./ConditionEditButtons.module.css";
import { useState } from "react";
import EditConditionModal from "../EditConditionModal/EditConditionModal";

const ConditionEditButtons = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toEdit = () => {
    setIsEditModalOpen(true);
  };

  const deleteCondition = () => {
    // MEMO: 削除する非同期処理が走る
  };

  const closeModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <div className={styles.buttons}>
        <div className={styles.editButton}>
          <Button type="button" onClick={toEdit} className={styles.white} text="編集" />
        </div>
        <div className={styles.deleteButton}>
          <Button type="button" onClick={deleteCondition} className={styles.white} text="削除" />
        </div>
      </div>
      {isEditModalOpen && <EditConditionModal closeModal={closeModal} modalTitle={"お気に入り条件編集"} />}
    </>
  );
};

export default ConditionEditButtons;

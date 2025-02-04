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

  const handleDelete = () => {
    // MEMO: 削除する非同期処理が走る
    
  };

  const closeModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <dl className={styles.buttons}>
        <dd className={styles.editButton}>
          <Button type="button" onClick={toEdit} className={styles.white} text="編集" />
        </dd>
        <dd className={styles.deleteButton}>
          <Button type="button" onClick={handleDelete} className={styles.white} text="削除" />
        </dd>
      </dl>
      {isEditModalOpen && <EditConditionModal closeModal={closeModal} modalTitle={"お気に入り条件編集"} />}
    </>
  );
};

export default ConditionEditButtons;

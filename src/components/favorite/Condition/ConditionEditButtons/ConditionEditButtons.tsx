"use client";

import Button from "@/components/utils/button/Button";
import styles from "./ConditionEditButtons.module.css";
import { useState } from "react";
import EditConditionModal from "../EditConditionModal/EditConditionModal";
import { deleteCondition } from "@/utils/apiFunc";

type searchConditionIdProps = {
  searchConditionId: number;
};

const ConditionEditButtons: React.FC<searchConditionIdProps> = ({ searchConditionId }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleDelete = async () => {
    await deleteCondition(searchConditionId);
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
      {isEditModalOpen && (
        <EditConditionModal closeModal={closeModal} modalTitle={"お気に入り条件編集"} />
      )}
    </>
  );
};

export default ConditionEditButtons;

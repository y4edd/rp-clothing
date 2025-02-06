"use client";

import Modal from "@/components/Modal/Modal";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import buttonStyles from "@/components/utils/button/Button.module.css";
import Button from "@/components/utils/button/Button";
import { deleteCondition } from "@/utils/apiFunc";

const DeleteConditionModal = () => {
  const router = useRouter();
    // モーダルを閉じる処理
    const closeModal = () => {
      router.back();
    };

    const handleCancel = () => {
      router.back();
    };

    const handleDelete = async() => {
      // await deleteCondition(searchConditionId);
    };

  return (
    <Modal onClose={closeModal}>
      <div className={styles.modalContent}>
        <h2>お気に入り条件削除</h2>
        <div className={styles.confirm}>本当に削除しますか？</div>
        <div className={styles.conditionName}>お気に入り条件名：{}</div>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <Button type="submit" text="削除する" onClick={handleDelete} className={buttonStyles.red} />
          </div>
          <div className={styles.button}>
            <Button type="button" text="キャンセル" onClick={handleCancel} className={buttonStyles.black} />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteConditionModal;

// DeleteButtons.test.tsx
// DeleteConfirmText.test.tsx
// DeleteDataList.test.tsx
// AccountDeleteModal.test.tsx
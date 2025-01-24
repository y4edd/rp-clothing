"use client";

import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import styles from "./RegisterConditionModal.module.css";

const RegisterConditionModal = () => {
  const router = useRouter();

  // モーダルを閉じる処理
  const closeModal = () => {
    router.back();
  };

  return (
    <>
        <Modal onClose={closeModal}>
          <div className={styles.modalContent}>
            <h2>お気に入り条件登録</h2>
            <div className={styles.registerConditionsList}>
              <div className={styles.conditionName}>
                <h3>条件名（必須入力）</h3>
                <input
                  type="text"
                  id="conditionName"
                  data-testid="conditionName"
                  name="conditionName"
                  className={styles.conditionNameInput}
                  onChange={handleConditionName}
                  value={conditionName}
                />
              </div>  
              <div className={styles.price}>
                <h3>値段</h3>
              </div>
              <div className={styles.category}>
                <h3>カテゴリ</h3>
              </div>
              <div className={styles.keyWord}>
                <h3>キーワード</h3>
              </div>
            </div>
          </div>
        </Modal>
    </>
  );
};

export default RegisterConditionModal;
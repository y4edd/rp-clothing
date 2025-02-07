"use client";

import Modal from "@/components/Modal/Modal";
import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css";
import { deleteCondition } from "@/utils/apiFunc";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "./DeleteModal.module.css";

const DeleteModal = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  // クエリパラメータから削除対象の検索条件IDを取得
  const searchConditionIdString = searchParams.get("searchConditionId");
  const searchConditionId = searchConditionIdString ? Number(searchConditionIdString) : undefined;
  const conditionName = searchParams.get("conditionName");

  // モーダルを閉じる
  const closeModal = () => {
    router.back();
  };

  // キャンセルボタンを押したときの処理
  const handleCancel = () => {
    router.back();
  };

  if (!searchConditionId || !conditionName) {
    return <div>検索条件を取得できませんでした。</div>;
  }
  // 削除ボタンを押したときの処理
  const handleDelete = async () => {
    setErrorMessage("");
    try {
      await deleteCondition(searchConditionId);
      router.push("/mypage/searchCondition");
    } catch (error) {
      console.error(error);
      setErrorMessage("削除に失敗しました。もう一度お試しください。");
    }
  };

  return (
    <>
      {/* Next.js の自動トップスクロールを防ぐためのダミー要素
      → Next.js ではページ遷移時にデフォルトでトップにスクロールされるが、これを防ぐために使用 */}
      <div />
      <Modal onClose={closeModal}>
        <div className={styles.modalContent}>
          <h2>お気に入り条件削除</h2>
          <div className={styles.confirm}>本当に削除しますか？</div>
          <div className={styles.conditionName}>お気に入り条件名：{conditionName}</div>
          <div className={styles.errorMessage}>{errorMessage}</div>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <Button
                type="submit"
                text="削除する"
                onClick={handleDelete}
                className={buttonStyles.red}
              />
            </div>
            <div className={styles.button}>
              <Button
                type="button"
                text="キャンセル"
                onClick={handleCancel}
                className={buttonStyles.black}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteModal;

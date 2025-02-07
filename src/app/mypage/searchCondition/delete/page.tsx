"use client";

import Modal from "@/components/Modal/Modal";
import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css";
import { deleteCondition } from "@/utils/apiFunc";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./page.module.css";

const DeleteConditionModal = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // クエリパラメータから削除対象の検索条件IDを取得
  const searchConditionIdString = searchParams.get("searchConditionId");
  const searchConditionId = Number(searchConditionIdString);
  const conditionName = searchParams.get("conditionName");

  // モーダルを閉じる
  const closeModal = () => {
    router.back();
  };

  // キャンセルボタンを押したときの処理
  const handleCancel = () => {
    router.back();
  };

  // 削除ボタンを押したときの処理
  const handleDelete = async () => {
    await deleteCondition(searchConditionId);
    router.push("/mypage/searchCondition");
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

export default DeleteConditionModal;

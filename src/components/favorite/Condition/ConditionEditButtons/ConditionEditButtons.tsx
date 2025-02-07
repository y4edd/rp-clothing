"use client";

import Button from "@/components/utils/button/Button";
import type { FavConditionProps } from "@/types/search/search";
import { useRouter } from "next/navigation";
import styles from "./ConditionEditButtons.module.css";

type searchConditionIdProps = {
  condition: FavConditionProps;
};

const ConditionEditButtons: React.FC<searchConditionIdProps> = ({ condition }) => {
  const router = useRouter();
  // 空の値を除外
  const filteredParams = Object.fromEntries(
    Object.entries(condition)
      .filter(([_, v]) => v !== "")
      // number型入ってきてもstring型にする
      .map(([key, value]) => [key, String(value)]),
  );
  // クエリパラメータを作成
  const queryString = new URLSearchParams(filteredParams).toString();

  const toEdit = () => {
    router.push(`/mypage/searchCondition/edit?${queryString}`);
  };

  const handleDelete = async () => {
    router.push(`/mypage/searchCondition/delete?${queryString}`);
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
    </>
  );
};

export default ConditionEditButtons;

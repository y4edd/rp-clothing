import type { FavConditionProps } from "@/types/search/search";
import styles from "./ConditionEditButtons.module.css";
import Link from "next/link";

type searchConditionIdProps = {
  condition: FavConditionProps;
};

const ConditionEditButtons: React.FC<searchConditionIdProps> = ({ condition }) => {

  // 空の値を除外
  const filteredParams = Object.fromEntries(
    Object.entries(condition)
      .filter(([_, v]) => v !== "")
      // number型入ってきてもstring型にする
      .map(([key, value]) => [key, String(value)]),
  );
  // クエリパラメータを作成
  const queryString = new URLSearchParams(filteredParams).toString();

  return (
    <>
      <dl className={styles.buttons}>
        <dd className={styles.editButton}>
          <Link href={`/mypage/searchCondition/edit?${queryString}`} className={styles.white}>編集</Link>
        </dd>
        <dd className={styles.deleteButton}>
          <Link href={`/mypage/searchCondition/delete?${queryString}`} className={styles.white}>削除</Link>
        </dd>
      </dl>
    </>
  );
};

export default ConditionEditButtons;

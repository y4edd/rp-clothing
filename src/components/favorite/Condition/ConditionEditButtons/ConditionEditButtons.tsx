"use client";

import Button from "@/components/utils/button/Button";
import styles from "./ConditionEditButtons.module.css";
import { deleteCondition } from "@/utils/apiFunc";
import { useRouter } from "next/navigation";

type searchConditionIdProps = {
  searchConditionId: number;
};

const ConditionEditButtons: React.FC<searchConditionIdProps> = ({ searchConditionId }) => {
  const router = useRouter();

  const toEdit = () => {
    router.push("/mypage/searchCondition/edit");
  };

  const handleDelete = async () => {
    router.push("/mypage/searchCondition/delete");
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

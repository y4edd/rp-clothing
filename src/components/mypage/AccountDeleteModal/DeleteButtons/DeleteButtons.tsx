"use client";

import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css";
import { showErrorToast, showToast } from "@/components/utils/toast/toast";
import { useAuth } from "@/contexts/Authcontexts";
import { deleteUser } from "@/utils/apiFunc";
import { useRouter } from "next/navigation";
import styles from "./DeleteButtons.module.css";

type Prop = {
  setIsDeleteModal: (boolean: boolean) => void;
};
const DeleteButtons = ({ setIsDeleteModal }: Prop) => {
  const router = useRouter();
  const token = useAuth();
  if (!token) {
    return;
  }
  const handleDelete = async () => {
    const response = await deleteUser();
    if (!response.ok) {
      showErrorToast("アカウントの削除に失敗しました");
    }
    showToast("アカウントが削除されました！");
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };
  return (
    <div className={styles.buttons}>
      <div className={styles.btn}>
        <Button type="submit" text="削除する" className={buttonStyles.red} onClick={handleDelete} />
      </div>
      <div className={styles.btn}>
        <Button
          type="button"
          text="キャンセル"
          onClick={() => setIsDeleteModal(false)}
          className={buttonStyles.black}
        />
      </div>
    </div>
  );
};

export default DeleteButtons;

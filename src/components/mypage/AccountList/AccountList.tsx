"use client";
import { showErrorToast, showToast } from "@/components/utils/toast/toast";
import { postLogout } from "@/utils/apiFunc";
import BackspaceIcon from "@mui/icons-material/Backspace";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AccountDeleteModal from "../AccountDeleteModal/AccountDeleteModal";
import ActionButton from "../ActionButton/ActionButton";
import ActionLink from "../ActionLink/ActionLink";
import styles from "./AccountList.module.css";

const ICON_SIZE = "70px";

const AccountList = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response: Response = await postLogout();

      if (!response.ok) {
        showErrorToast("ログアウトに失敗しました");
        return;
      } else {
        showToast("ログアウトに成功しました！");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className={styles.contentList}>
        <h2 className={styles.title}>アカウント関連</h2>
        <ActionLink
          linkPath="/user"
          textArray={["ユーザー情報", "確認・変更"]}
          MUIicon={<PersonIcon sx={{ fontSize: ICON_SIZE }} />}
        />
        <ActionButton
          onClick={handleLogout}
          textArray={["ログアウト"]}
          MUIicon={<LogoutIcon sx={{ fontSize: ICON_SIZE }} />}
        />
        <ActionButton
          onClick={() => setIsDeleteModalOpen(true)}
          textArray={["アカウント削除"]}
          MUIicon={<BackspaceIcon sx={{ fontSize: ICON_SIZE }} />}
        />
      </div>
      {/* アカウント削除確認モーダル */}
      {isDeleteModalOpen && <AccountDeleteModal setIsDeleteModal={setIsDeleteModalOpen} />}
    </>
  );
};

export default AccountList;

"use client";
import BackspaceIcon from "@mui/icons-material/Backspace";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import AccountDeleteModal from "../AccountDeleteModal/AccountDeleteModal";
import ActionButton from "../ActionButton/ActionButton";
import ActionLink from "../ActionLink/ActionLink";
import styles from "./AccountList.module.css";

const ICON_SIZE = "70px";

const AccountList = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const sampleFunc = () => {
    console.log("クリックされました");
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
          onClick={sampleFunc}
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
      {isDeleteModalOpen && (
        <AccountDeleteModal setIsDeleteModal={setIsDeleteModalOpen} />
      )}
    </>
  );
};

export default AccountList;

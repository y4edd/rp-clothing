"use client";
import BackspaceIcon from "@mui/icons-material/Backspace";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import ActionButton from "../ActionButton/ActionButton";
import ActionLink from "../ActionLink/ActionLink";
import styles from "./AccountList.module.css";

const AccountList = () => {
  const sampleFunc = () => {
    console.log("クリックされました");
  };
  return (
    <div className={styles.contentList}>
      <h2 className={styles.title}>アカウント関連</h2>
      <ActionLink
        linkPath="/"
        textArray={["ユーザー情報", "確認・変更"]}
        MUIicon={<PersonIcon sx={{ fontSize: "70px" }} />}
      />
      <ActionButton
        onClick={sampleFunc}
        textArray={["ログアウト"]}
        MUIicon={<LogoutIcon sx={{ fontSize: "70px" }} />}
      />
      <ActionButton
        onClick={sampleFunc}
        textArray={["アカウント削除"]}
        MUIicon={<BackspaceIcon sx={{ fontSize: "70px" }} />}
      />
    </div>
  );
};

export default AccountList;

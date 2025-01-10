import styles from "./UnauthorizedAccess.module.css";
import LinkBtn from "@/components/utils/link/LinkBtn";

const UnauthorizedAccess = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorText}>
        <p>ログイン状態を確認できませんでした。</p>
        <p>下記ボタンよりログインしてください。</p>
      </div>
      <div className={styles.linkButtons}>
        <LinkBtn pathName="/user/login" text="ログイン" btnColor="black" />
        <LinkBtn pathName="/user/register" text="新規会員登録（無料）" btnColor="white" />
      </div>
    </div>
  );
};

export default UnauthorizedAccess;

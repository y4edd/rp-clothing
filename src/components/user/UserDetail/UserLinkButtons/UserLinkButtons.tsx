import LinkBtn from "@/components/utils/link/LinkBtn";
import styles from "./UserLinkButtons.module.css";
const UserLinkButtons = () => {
  return (
    <div className={styles.buttons}>
      <div className={styles.btn}>
        <LinkBtn text="戻る" btnColor="black" pathName="/mypage" />
      </div>
      <div className={styles.btn}>
        <LinkBtn text="編集する" btnColor="black" pathName="/user/edit" />
      </div>
    </div>
  );
};

export default UserLinkButtons;

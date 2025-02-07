import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css";
import LinkBtn from "@/components/utils/link/LinkBtn";
import styles from "./UserEditButtons.module.css";

const UserEditButtons = () => {
  return (
    <div className={styles.buttons}>
      <div className={styles.btn}>
        <LinkBtn text="戻る" pathName="/mypage" btnColor="black" />
      </div>
      <div className={styles.btn}>
        <Button text="更新する" type="submit" className={buttonStyles.black} />
      </div>
    </div>
  );
};

export default UserEditButtons;

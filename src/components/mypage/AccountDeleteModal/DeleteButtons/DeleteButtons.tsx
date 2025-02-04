import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css";
import styles from "./DeleteButtons.module.css";
type Prop = {
  setIsDeleteModal: (boolean: boolean) => void;
};
const DeleteButtons = ({ setIsDeleteModal }: Prop) => {
  return (
    <div className={styles.buttons}>
      <div className={styles.btn}>
        <Button type="submit" text="削除する" className={buttonStyles.red} />
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

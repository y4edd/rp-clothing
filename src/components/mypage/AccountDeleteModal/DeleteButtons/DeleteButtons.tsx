import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css";
import styles from "./DeleteButtons.module.css";
import { useRouter } from "next/navigation";
import { deleteUser } from "@/utils/apiFunc";
type Prop = {
  setIsDeleteModal: (boolean: boolean) => void;
};
const DeleteButtons = ({ setIsDeleteModal }: Prop) => {
  const router = useRouter();
  const handleDelete = async() => {
    await deleteUser(token);
    console.log("削除");
    // router.push("/");
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

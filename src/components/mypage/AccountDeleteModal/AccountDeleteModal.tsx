import styles from "./AccountDeleteModal.module.css";
import DeleteButtons from "./DeleteButtons/DeleteButtons";
import DeleteConfirmText from "./DeleteConfirmText/DeleteConfirmText";
import DeleteDataList from "./DeleteDataList/DeleteDataList";

type Prop = {
  setIsDeleteModal: (boolean: boolean) => void;
};
const AccountDeleteModal = ({ setIsDeleteModal }: Prop) => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <DeleteConfirmText />
        <DeleteDataList />
        <DeleteButtons setIsDeleteModal={setIsDeleteModal} />
      </div>
    </div>
  );
};

export default AccountDeleteModal;

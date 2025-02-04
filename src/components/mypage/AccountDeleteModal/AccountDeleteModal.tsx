import DeleteButtons from "./DeleteButtons/DeleteButtons";
import DeleteDataList from "./DeleteDataList/DeleteDataList";
import DeleteConfirmText from "./DeleteConfirmText/DeleteConfirmText";
import styles from "./AccountDeleteModal.module.css";

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

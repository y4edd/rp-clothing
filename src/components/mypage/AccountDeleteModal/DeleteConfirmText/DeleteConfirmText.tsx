import styles from "./DeleteConfirmText.module.css";
const DeleteConfirmText = () => {
  return (
    <div className={styles.textArea}>
      <p className={styles.bigText}>本当に削除しますか ?</p>
      <p className={styles.smallText}>
        下記情報は<span> すべて </span>削除されます
      </p>
    </div>
  );
};

export default DeleteConfirmText;

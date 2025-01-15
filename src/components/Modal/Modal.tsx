// MEMO: 表示されるモーダルコンポーネントのlayout
"use client";

import CloseIcon from "@mui/icons-material/Close";
import styles from "./Modal.module.css";

const Modal = ({children, onClose}: { children: React.ReactNode; onClose: () => void }) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <div className={styles.modalItem}>
          {children}
          <button type="button" onClick={onClose} className={styles.closeButton}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

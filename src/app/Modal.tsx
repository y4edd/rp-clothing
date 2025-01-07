// MEMO: 表示されるモーダルコンポーネントのlayout
"use client";

import CloseIcon from "@mui/icons-material/Close";
import styles from "./Modal.module.css";
import { useRouter } from "next/navigation";

const Modal = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const onDismiss = () => {
    router.back();
  };

  return (
    <>
      <div className={styles.modalBackdrop}>
        <div className={styles.modal}>
          {children}
          <button type="button" onClick={onDismiss} className={styles.closeButton}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;

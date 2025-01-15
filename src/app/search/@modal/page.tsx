// 検索モーダル
"use client";

import Modal from "@/components/Modal/Modal";
import Conditions from "@/components/search/Conditions/Conditions";
import SearchStartButton from "@/components/search/SearchStartButton/SearchStartButton";
import styles from "./page.module.css";

const searchPage = () => {
  return (
    <Modal>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>検索条件</h2>
        <div className={styles.searchConditions}>
          <Conditions />
          <SearchStartButton />
        </div>
      </div>
    </Modal>
  );
};

export default searchPage;

// 検索モーダル
"use client";

import Modal from "@/app/Modal";
import CategoryCondition from "@/components/search/filterSearch/condition/CategoryCondition/CategoryCondition";
import FavConditions from "@/components/search/filterSearch/condition/FavConditions/FavConditions";
import KeyWordCondition from "@/components/search/filterSearch/condition/KeyWordCondition/KeyWordCondition";
import PriceCondition from "@/components/search/filterSearch/condition/PriceCondition/PriceCondition";
import SearchStartButton from "@/components/search/filterSearch/button/SearchStartButton/SearchStartButton";
import styles from "./page.module.css";

const searchPage = () => {
  return (
    <Modal>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>検索条件</h2>
        <div className={styles.searchConditions}>
          <FavConditions />
          <PriceCondition />
          <CategoryCondition />
          <KeyWordCondition />
          <SearchStartButton />
        </div>
      </div>
    </Modal>
  );
}

export default searchPage;

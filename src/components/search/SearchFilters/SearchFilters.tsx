"use client";

import CloseIcon from '@mui/icons-material/Close';
import styles from "./SearchFilters.module.css";

const SearchFilters = () => {
  const deleteCondition = () => {
    console.log("削除");
  };
  return (
    <>
      <div className={styles.filtersContainer}>
        <div className={styles.filtersTitle}>検索内容：</div>
        <div className={styles.filters}>
          <div className={styles.filter}>
            <p>3,000円以上</p>
            <button  className={styles.deleteFilterButton}onClick={deleteCondition}><CloseIcon /></button>
          </div>
          <div className={styles.filter}>
            <p>6,000円以上</p>
            <button className={styles.deleteFilterButton}onClick={deleteCondition}><CloseIcon /></button>
          </div>
          <div className={styles.filter}>
            <p>スーツ・セットアップ</p>
            <button  className={styles.deleteFilterButton}onClick={deleteCondition}><CloseIcon /></button>
          </div>
          <div className={styles.filter}>
            <p>軍パン</p>
            <button  className={styles.deleteFilterButton}onClick={deleteCondition}><CloseIcon /></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchFilters;
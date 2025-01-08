import Link from "next/link";
import React from "react";
import Item from "../Item/Item";
import styles from "./LookHistory.module.css";
const LookHistory = () => {
  // MEMO アイテム情報取得したら消します

  const sampleArrayHistory = new Array(5).fill("").map((_, index) => index + 1);

  return (
    <div className={styles.container}>
      <h2 className={styles.contentTitle}>最近チェックしたアイテム</h2>
      <div className={styles.gridItemsHistory}>
        {sampleArrayHistory.map((item) => (
          <Item key={item} linkPath="/" />
        ))}
      </div>

      {/* MEMO:未ログ状態の時表示する。後でボタンコンポーネントに変更する */}
      {/* <div className={styles.onlyMember}>
        <div className={styles.onlyTitle}>
          <h3>会員限定機能です</h3>
        </div>
        <p>取扱商品多数！まずは会員登録！</p>
        <button>新規会員登録</button>
      </div> */}
    </div>
  );
};

export default LookHistory;

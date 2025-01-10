"use client";
import styles from "./unexpected.module.css";
import LinkBtn from "@/components/utils/link/LinkBtn";

const error = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorText}>
        <p>申し訳ありません</p>
        <p>サーバーエラーにより情報を取得できませんでした。</p>
        <p>下記ボタンよりトップページへ戻り、再度操作を行ってください。</p>
      </div>
      <div className={styles.linkButton}>
        <LinkBtn pathName="/" text="トップページへ" btnColor="black" />
      </div>
    </div>
  );
};

export default error;

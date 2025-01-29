"use client";
import Button from "@/components/utils/button/Button";
import btnStyle from "@/components/utils/button/Button.module.css";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./NoItem.module.css";

const NoItem = () => {
  const router = useRouter();
  const handleReload = () => {
    window.location.reload();
  };
  const handleBackPage = () => {
    return router.back();
  };
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <p>アイテム情報を取得できませんでした。</p>
        <p>下記ボタンよりもう一度試すか、前のページのお戻りください。</p>
      </div>
      <div className={styles.button}>
        <Button text="もう一度試す" className={btnStyle.black} onClick={handleReload} />
      </div>
      <div className={styles.button}>
        <Button text="前のページへ戻る" className={btnStyle.white} onClick={handleBackPage} />
      </div>
    </div>
  );
};

export default NoItem;

"use client";

import { useState } from "react";
import styles from "./KeyWordCondition.module.css";

const KeyWordCondition = () => {
  const [keyWord, setKeyWord] = useState("");

  const handleKeyWord = (e:React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
  };

  return (
    <div className={styles.keyWordCondition}>
      <h3 className={styles.title}>キーワード</h3>
      <input type="text" id="keyWord" name="keyWord" className={styles.keyWord} onChange={handleKeyWord}/>
    </div>
  );
};

export default KeyWordCondition;

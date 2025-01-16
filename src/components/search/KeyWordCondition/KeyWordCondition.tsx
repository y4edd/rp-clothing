"use client";

import { Action } from "@/types/type";
import styles from "./KeyWordCondition.module.css";

type KeyWordConditionProps = {
  keyWord: string;
  dispatch: (action: Action) => void;
}


const KeyWordCondition = ({keyWord,dispatch}:KeyWordConditionProps) => {

  const handleKeyWord = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: "SET_KEYWORD", payload: e.target.value})
  };

  return (
    <div className={styles.keyWordCondition}>
      <h3 className={styles.title}>キーワード</h3>
      <input type="text" id="keyWord" name="keyWord" className={styles.keyWord} onChange={handleKeyWord} value={keyWord}/>
    </div>
  );
};

export default KeyWordCondition;

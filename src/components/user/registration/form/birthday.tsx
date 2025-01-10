"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./birthday.module.css";
import { FormProps } from "@/types/registration/registration";

interface BirthdayProps {
  setFormArray: Dispatch<SetStateAction<FormProps>>;
  name: string;
}

const Birthday = ({ setFormArray, name }: BirthdayProps) => {
  const [year, setyear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    setFormArray((formItem) => ({
      ...formItem,
      [name]: `${year}年${month}月${day}日`,
    }));
  }, [year, month, day, name, setFormArray]);

  return (
    <dl className={styles.table}>
      <dt>生年月日</dt>
      <div className={styles.birthdayForm}>
        <dd className={styles.birthdayYear}>
          <input
            type="text"
            name={name}
            value={year}
            id="birthdayYear"
            maxLength={4}
            onChange={(e) => setyear(e.target.value)}
          />
          <label htmlFor="birthdayYear">年</label>
        </dd>
        <dd className={styles.birthdayMonth}>
          <input
            type="text"
            name={name}
            value={month}
            id="birthdayMonth"
            maxLength={2}
            onChange={(e) => setMonth(e.target.value)}
          />
          <label htmlFor="birthdayMonth">月</label>
        </dd>
        <dd className={styles.birthdayDate}>
          <input
            type="text"
            name={name}
            value={day}
            id="birthdayDate"
            maxLength={2}
            onChange={(e) => setDay(e.target.value)}
          />
          <label htmlFor="birthdayDate">日</label>
        </dd>
      </div>
      <p className={styles.attention}>
        ※後から変更はできません！
        <br />
        お間違い無いようにご注意ください
      </p>
    </dl>
  );
};

export default Birthday;

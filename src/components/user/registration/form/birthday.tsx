"use client";
import styles from "./birthday.module.css";
import { Dispatch, SetStateAction } from "react";
import Year from "./birthdaySelect/year";
import Month from "./birthdaySelect/month";
import Day from "./birthdaySelect/day";
interface BirthdayProps {
  year: string;
  setYear: Dispatch<SetStateAction<string>>;
  month: string;
  setMonth: Dispatch<SetStateAction<string>>;
  day: string;
  setDay: Dispatch<SetStateAction<string>>;
}

const Birthday = ({
  year,
  month,
  day,
  setYear,
  setMonth,
  setDay,
}: BirthdayProps) => {
  return (
    <dl className={styles.table}>
      <dt>生年月日</dt>
      <div className={styles.birthdayForm}>
        <dd className={styles.birthdayYear}>
          <Year year={year} setYear={setYear} />
        </dd>
        <dd className={styles.birthdayMonth}>
          <Month month={month} setMonth={setMonth} />
        </dd>
        <dd className={styles.birthdayDate}>
          <Day day={day} setDay={setDay} />
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

import type { Dispatch, SetStateAction } from "react";
import styles from "./month.module.css";

interface MonthProps {
  month: string;
  setMonth: Dispatch<SetStateAction<string>>;
}

const Month = ({ month, setMonth }: MonthProps) => {
  const monthList: number[] = [];
  for (let i = 1; i <= 12; i++) {
    monthList.push(i);
  }

  return (
    <>
      <select
        name="month"
        id="month"
        className={styles.monthSelect}
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        data-testid="month-select"
      >
        {monthList.map((month) => (
          <option value={month} key={month}>
            {month}
          </option>
        ))}
      </select>
      <label htmlFor="month">月</label>
    </>
  );
};

export default Month;

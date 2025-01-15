import type { FormProps } from "@/types/user/user";
import type { UseFormRegister } from "react-hook-form";
import styles from "./month.module.css";

interface MonthProps {
  register: UseFormRegister<FormProps>;
}

const Month = ({ register }: MonthProps) => {
  const monthList: number[] = [];
  for (let i = 1; i <= 12; i++) {
    monthList.push(i);
  }

  return (
    <>
      <select
        id="month"
        className={styles.monthSelect}
        {...register("month")}
        name="month"
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

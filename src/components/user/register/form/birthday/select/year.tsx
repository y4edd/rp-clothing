import type { FormProps } from "@/types/user/user";
import type { UseFormRegister } from "react-hook-form";
import styles from "./year.module.css";

interface YearProps {
  register: UseFormRegister<FormProps>;
}

const Year = ({ register }: YearProps) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const yearList: number[] = [];
  for (let i = currentYear; i > currentYear - 100; i--) {
    yearList.push(i);
  }
  return (
    <>
      <select
        id="year"
        className={styles.yearSelect}
        {...register("year")}
        name="year"
        data-testid="year-select"
      >
        {yearList.map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
      <label htmlFor="year">年</label>
    </>
  );
};

export default Year;

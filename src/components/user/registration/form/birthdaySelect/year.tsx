import { Dispatch, SetStateAction } from "react";
import styles from "./year.module.css";

interface YearProps {
  year: string;
  setYear: Dispatch<SetStateAction<string>>;
}

const Year = ({ year, setYear }: YearProps) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const yearList: number[] = [];
  for (let i = currentYear; i > currentYear - 100; i--) {
    yearList.push(i);
  }
  return (
    <>
      <select
        name="year"
        id="year"
        className={styles.yearSelect}
        value={year || currentYear.toString()}
        onChange={(e) => setYear(e.target.value)}
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

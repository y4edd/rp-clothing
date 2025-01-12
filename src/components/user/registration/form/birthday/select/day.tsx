import type { Dispatch, SetStateAction } from "react";
import styles from "./day.module.css";

interface DayProps {
  day: string;
  setDay: Dispatch<SetStateAction<string>>;
}

const Day = ({ day, setDay }: DayProps) => {
  const today = new Date();
  const currentDay = today.getDate();
  const dayList: number[] = [];
  for (let i = 1; i <= 31; i++) {
    dayList.push(i);
  }

  return (
    <>
      <select
        name="day"
        id="day"
        className={styles.daySelect}
        value={day || currentDay.toString()}
        onChange={(e) => setDay(e.target.value)}
        data-testid="day-select"
      >
        {dayList.map((day) => (
          <option value={day} key={day}>
            {day}
          </option>
        ))}
      </select>
      <label htmlFor="day">日</label>
    </>
  );
};

export default Day;

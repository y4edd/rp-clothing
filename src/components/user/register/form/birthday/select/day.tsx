import styles from "./day.module.css";
import { UseFormRegister } from "react-hook-form";
import { FormProps } from "@/types/user/user";

interface DayProps {
  register: UseFormRegister<FormProps>;
}

const Day = ({ register }: DayProps) => {
  const dayList: number[] = [];
  for (let i = 1; i <= 31; i++) {
    dayList.push(i);
  }

  return (
    <>
      <select
        id="day"
        className={styles.daySelect}
        {...register("day")}
        name="day"
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

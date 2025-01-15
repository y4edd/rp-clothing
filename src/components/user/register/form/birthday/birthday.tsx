import type { FormProps } from "@/types/user/user";
import type { UseFormRegister } from "react-hook-form";
import styles from "./birthday.module.css";
import Day from "./Select/Day";
import Month from "./Select/Month";
import Year from "./Select/Year";
interface BirthdayProps {
  register: UseFormRegister<FormProps>;
}

const Birthday = ({ register }: BirthdayProps) => {
  return (
    <dl className={styles.table}>
      <dt>生年月日</dt>
      <div className={styles.birthdayForm}>
        <dd className={styles.birthdayYear}>
          <Year register={register} />
        </dd>
        <dd className={styles.birthdayMonth}>
          <Month register={register} />
        </dd>
        <dd className={styles.birthdayDate}>
          <Day register={register} />
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

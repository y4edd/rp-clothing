import styles from "./Birthday.module.css";

type BirthDayProps = {
  birthDay: string;
}

const Birthday = ({birthDay}: BirthDayProps) => {
  const [year, month, day] = birthDay.split("-");
  return (
    <dl className={styles.birthday}>
      <dt>生年月日</dt>
      <dd className={styles.birthday}>
        <span>{year}年</span>
        <span>{month}月</span>
        <span>{day}日</span>
      </dd>
    </dl>
  );
};

export default Birthday;

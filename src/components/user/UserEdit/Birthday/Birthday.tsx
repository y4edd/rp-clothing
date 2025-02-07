import styles from "./Birthday.module.css";
const Birthday = () => {
  return (
    <dl className={styles.birthday}>
      <dt>生年月日</dt>
      <dd className={styles.birthday}>
        <span>2000 年</span>
        <span>2 月</span>
        <span>1 日</span>
      </dd>
    </dl>
  );
};

export default Birthday;

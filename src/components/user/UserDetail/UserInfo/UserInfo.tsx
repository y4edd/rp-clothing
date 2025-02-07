import styles from "./UserInfo.module.css";

const UserInfo = () => {
  return (
    <dl className={styles.userDetail}>
      <dt>ユーザ名</dt>
      <dd>RP太郎</dd>
      <dt>メールアドレス</dt>
      <dd>example@clothing.com</dd>
      <dt>生年月日</dt>
      <dd className={styles.birthday}>
        <span>2000 年</span>
        <span>2 月</span>
        <span>1 日</span>
      </dd>
      <dt>パスワード</dt>
      <dd>＊＊＊＊＊＊＊＊</dd>
    </dl>
  );
};

export default UserInfo;

import styles from "./RegisterDetails.module.css";

const RegisterDetails = () => {
  return (
    <div className={styles.register}>
      <div className={styles.registerContents}>
        <p>会員登録がお済みでない方は、</p>
        <p>こちらから登録にお進みください。</p>
      </div>
    </div>
  );
};

export default RegisterDetails;

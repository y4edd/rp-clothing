import LinkBtn from "@/components/utils/link/LinkBtn";
import styles from "./unexpected.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorText}>
        <p>ご指定のページは存在しません。</p>
        <p>下記ボタンよりトップページへ遷移してください。</p>
      </div>
      <div className={styles.linkButton}>
        <LinkBtn pathName="/" text="トップページへ" btnColor="black" />
      </div>
    </div>
  );
};

export default NotFound;

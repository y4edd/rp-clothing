import LinkBtn from "@/components/utils/link/LinkBtn";
import styles from "../unexpected.module.css";

const NoItems = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorText}>
        <p>ご指定の商品がありませんでした</p>
      </div>
      <div className={styles.linkButton}>
        <LinkBtn pathName="/" text="条件をリセットする" btnColor="black" />
      </div>
    </div>
  );
};

export default NoItems;

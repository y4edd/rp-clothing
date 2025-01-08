import Category from "../../category/Category";
import styles from "./CategoryCondition.module.css";

const CategoryCondition = () => {
  return (
    <>
      <h3>カテゴリ</h3>
      <div className={styles.category}>
        <Category id={"トップス"} name={"トップス"} htmlFor={"トップス"} text={"トップス"} />
        <Category
          id={"ズボン・パンツ"}
          name={"ズボン・パンツ"}
          htmlFor={"ズボン・パンツ"}
          text={"ズボン・パンツ"}
        />
        <Category
          id={"スーツ・セットアップ"}
          name={"スーツ・セットアップ"}
          htmlFor={"スーツ・セットアップ"}
          text={"スーツ・セットアップ"}
        />
        <Category
          id={"オーバーオール"}
          name={"オーバーオール"}
          htmlFor={"オーバーオール"}
          text={"オーバーオール"}
        />
        <Category
          id={"レインウェア"}
          name={"レインウェア"}
          htmlFor={"レインウェア"}
          text={"レインウェア"}
        />
        <Category
          id={"コート・ジャケット"}
          name={"コート・ジャケット"}
          htmlFor={"コート・ジャケット"}
          text={"コート・ジャケット"}
        />
      </div>
    </>
  );
};

export default CategoryCondition;

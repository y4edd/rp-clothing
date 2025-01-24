"use client";
import FavConditions from "@/components/favorite/FavConditions/FavConditions";
import RegisterConditionButton from "@/components/favorite/RegisterConditionButton/RegisterConditionButton";
import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import styles from "./page.module.css";

const SearchCondition = () => {
  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/mypage", title: "マイページ" },
          { link: "/mypage/searchCondition", title: "お気に入り条件" },
        ]}
      />
      <PageTitle title="お気に入り条件" />
      <RegisterConditionButton />
      <div className={styles.container}>
        <table className={styles.table}>
          <tr className={styles.conditionTitle}>
            <td className={styles.conditionName}>条件名</td>
            <td className={styles.registerCondition}>登録条件</td>
            <td className={styles.conditionControl}>編集・削除</td>
          </tr>
          <FavConditions />
        </table>
      </div>
    </>
  );
};

export default SearchCondition;

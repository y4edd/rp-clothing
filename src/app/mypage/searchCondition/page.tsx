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
        <div className={styles.conditionGroup}>
          <div className={styles.conditionName}>条件名</div>
          <div className={styles.registerCondition}>登録条件</div>
          <div className={styles.conditionControl}>編集/削除</div>
        </div>
        <FavConditions />
      </div>
    </>
  );
};

export default SearchCondition;

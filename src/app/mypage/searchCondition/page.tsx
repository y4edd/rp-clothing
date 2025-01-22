"use client"
import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import styles from "./page.module.css";
import FavCondition from "@/components/favorite/FavCondition/FavCondition";
import RegisterConditionButton from "@/components/favorite/RegisterConditionButton/RegisterConditionButton";
import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css"

const SearchCondition = () => {
  const toEdit = () => {
    console.log("編集がクリックされました");
  };
  const deleteCondition = () => {
    console.log("削除がクリックされました");
  };
  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/mypage", title: "マイページ"},
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
        {/* <FavCondition /> */}
        <div className={styles.conditionList}>
          <div className={styles.name}>ビンテージ市場</div>
          <div className={styles.condition}>値段：0〜4000円<br />カテゴリ：Tシャツ</div>
          <div className={styles.buttons}>
            {/* <ConditionEditButtons /> */}
            <div className={styles.editButton}>
              <Button type="button" onClick={toEdit} className={buttonStyles.white} text="編集" />
            </div>
            <div className={styles.deleteButton}>
              <Button type="button" onClick={deleteCondition} className={buttonStyles.white} text="削除" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCondition;
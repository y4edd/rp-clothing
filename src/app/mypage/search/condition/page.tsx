import FavConditions from "@/components/favorite/Condition/FavConditions/FavConditions";
import RegisterConditionButton from "@/components/favorite/Condition/RegisterConditionButton/RegisterConditionButton";
import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import UnauthorizedAccess from "@/components/user/UnauthorizedAccess/UnauthorizedAccess";
import { checkAuth } from "@/utils/checkAuth";
import styles from "./page.module.css";

const SearchCondition = async () => {
  const userId = await checkAuth();
  if (!userId) {
    return <UnauthorizedAccess />;
  }
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
          <thead>
            <tr className={styles.conditionTitleContainer}>
              <td className={styles.conditionName}>条件名</td>
              <td className={styles.registerCondition}>登録条件</td>
              <td className={styles.conditionControl}>編集・削除</td>
            </tr>
          </thead>
          <tbody>
            <FavConditions userId={userId} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SearchCondition;

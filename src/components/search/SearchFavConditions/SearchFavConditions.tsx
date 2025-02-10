"use client";
import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css";
import type { FavConditionProps } from "@/types/search/search";
import { useRouter } from "next/navigation";
import styles from "./SearchFavConditions.module.css";

type SearchFavConditionsProps = {
  favConditions: FavConditionProps[];
};

const SearchFavConditions = ({ favConditions }: SearchFavConditionsProps) => {
  const router = useRouter();

  const toMyPage = () => {
    router.push("/mypage/searchCondition");
  };

  const toSearch = (favCondition: FavConditionProps) => {
    //遷移先の画面で、非同期は走る
    const query = new URLSearchParams({
      minPrice: favCondition.minPrice || "",
      maxPrice: favCondition.maxPrice || "",
      selectedCategory: favCondition.selectedCategory || "",
      keyWord: favCondition.keyWord || "",
    }).toString();

    router.push(`/search?${query}`);
  };

  return (
    <>
      <div className={styles.favCondition}>
        <h3 className={styles.title}>お気に入り条件</h3>
        <div className={styles.favConditionsContent}>
          <div className={styles.favConditions}>
            {/* FIXME:非同期で、お気に入り条件の取得、UI表示を行う処理を実装 */}
            {favConditions.map((favCondition: FavConditionProps) => {
              return (
                <Button
                  text={favCondition.conditionName}
                  key={favCondition.conditionName}
                  className={buttonStyles.gray}
                  onClick={() => toSearch(favCondition)}
                />
              );
            })}
          </div>
          <div className={styles.editButton}>
            <Button
              text={"お気に入り条件の編集"}
              onClick={toMyPage}
              className={buttonStyles.black}
            />
          </div>
        </div>
        {/* 何も登録されていない場合 */}
        {/* <p>
          お気に入り条件は登録されていません<br />
          マイページから、お気に入り条件を登録しましょう！
        </p>
        <Button text={"マイページ"} onClick={toMyPage} className={buttonStyles.black}/> */}
      </div>
    </>
  );
};

export default SearchFavConditions;

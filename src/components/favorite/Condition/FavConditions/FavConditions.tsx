import type { FavConditionProps } from "@/types/search/search";
import { getCondition } from "@/utils/apiFunc";
import FavCondition from "../FavCondition/FavCondition";

const FavConditions = async () => {
  const response = await getCondition();
  try {
    // API が失敗した場合のエラーチェック
    if (!response || !response.ok) {
      console.error("データ取得に失敗しました:", response?.status);
      return <div>データの取得に失敗しました。</div>;
    }

    const conditions = await response.json();

    return (
      <>
        {conditions.map((condition: FavConditionProps) => (
          <FavCondition
            searchConditionId={condition.searchConditionId}
            key={condition.conditionName}
            conditionName={condition.conditionName}
            minPrice={condition.minPrice}
            maxPrice={condition.maxPrice}
            selectedCategory={condition.selectedCategory}
            keyWord={condition.keyWord}
            condition={condition}
          />
        ))}
      </>
    );
  } catch (error) {
    console.error("API 呼び出しエラー:", error);
    return <div>エラーが発生しました。</div>;
  }
};

export default FavConditions;

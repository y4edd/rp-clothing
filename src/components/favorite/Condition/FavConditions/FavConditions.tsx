"use client";

import { getCondition } from "@/utils/apiFunc";
import FavCondition from "../FavCondition/FavCondition";
import { FavConditionProps } from "@/types/search/search";
import { useAsyncFn } from "react-use";

const FavConditions = async () => {
  // MEMO: 非同期処理でお気に入りの検索条件を受け取り、渡してmapで表示させる
  // const conditions = await getCondition();
  // conditions.map((condition:FavConditionProps) => {
  //   console.log(condition);
  //   return (
  //     <FavCondition
  //       conditionName={condition.conditionName}
  //       minPrice={condition.minPrice}
  //       maxPrice={condition.maxPrice}
  //       selectedCategory={condition.selectedCategory}
  //       keyWord={condition.keyWord}
  //     />
  //   );
  // })
  const [state, doFetch] = useAsyncFn(async () => {

  });
};

export default FavConditions;

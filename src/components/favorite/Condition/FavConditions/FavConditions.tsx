"use client";

import { getCondition } from "@/utils/apiFunc";
import FavCondition from "../FavCondition/FavCondition";
import { FavConditionProps } from "@/types/search/search";
import { useAsyncFn } from "react-use";
import { useEffect } from "react";

const FavConditions = () => {
  const [state, doFetch] = useAsyncFn(async () => {
    return await getCondition();
  }, []);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  if (!state.value)
    return (
      <tr>
        <th>Loading...</th>
      </tr>
    );

  return (
    <>
      {state.value.map((condition: FavConditionProps) => (
        <FavCondition
          searchConditionId={condition.searchConditionId}
          key={condition.conditionName}
          conditionName={condition.conditionName}
          minPrice={condition.minPrice}
          maxPrice={condition.maxPrice}
          selectedCategory={condition.selectedCategory}
          keyWord={condition.keyWord}
        />
      ))}
    </>
  );
};

export default FavConditions;

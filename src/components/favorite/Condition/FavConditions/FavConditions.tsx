"use client";

import FavCondition from "../FavCondition/FavCondition";
import { FavConditionProps } from "@/types/search/search";
import { useContext } from "react";
import { ConditionContext } from "@/context/searchConditionContext";

const FavConditions = () => {
  const { conditions } = useContext(ConditionContext);

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
          condition = {condition}
        />
      ))}
    </>
  );
};

export default FavConditions;

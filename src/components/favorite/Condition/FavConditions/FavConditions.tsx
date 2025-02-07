import FavCondition from "../FavCondition/FavCondition";
import { FavConditionProps } from "@/types/search/search";
import { getCondition } from "@/utils/apiFunc";

const FavConditions = async() => {
  const response = await getCondition();

  if(!response) {
    return;
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
          condition = {condition}
        />
      ))}
    </>
  );
};

export default FavConditions;

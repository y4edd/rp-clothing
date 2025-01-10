import CategoryCondition from "../CategoryCondition/CategoryCondition";
import FavConditions from "../FavConditions/FavConditions";
import KeyWordCondition from "../KeyWordCondition/KeyWordCondition";
import PriceCondition from "../PriceCondition/PriceCondition";

const Conditions = () => {
  return (
    <>
      <FavConditions />
      <PriceCondition />
      <CategoryCondition />
      <KeyWordCondition />
    </>
  );
};

export default Conditions;

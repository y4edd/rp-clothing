"use client";

import CategoryCondition from "../CategoryCondition/CategoryCondition";
import FavConditions from "../FavConditions/FavConditions";
import KeyWordCondition from "../KeyWordCondition/KeyWordCondition";
import PriceCondition from "../PriceCondition/PriceCondition";
import { State } from "@/types/type";
import { Action } from "@/types/type";

type Props = {
  state: State;
  dispatch: (action: Action) => void;
}

const Conditions = ({state, dispatch}: Props) => {
  return (
    <>
      <FavConditions />
      <PriceCondition minPrice={state.minPrice} maxPrice={state.maxPrice} dispatch={dispatch}/>
      <CategoryCondition selectedCategory={state.selectedCategory} dispatch={dispatch}/>
      <KeyWordCondition />
    </>
  );
};

export default Conditions;

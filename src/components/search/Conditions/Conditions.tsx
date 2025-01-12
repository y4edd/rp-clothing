import { useReducer } from "react";
import CategoryCondition from "../CategoryCondition/CategoryCondition";
import FavConditions from "../FavConditions/FavConditions";
import KeyWordCondition from "../KeyWordCondition/KeyWordCondition";
import PriceCondition from "../PriceCondition/PriceCondition";
import { State } from "@/types/type";
import { Action } from "@/types/type";

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_MIN_PRICE":
      return { ...state, minPrice: action.payload };
    case "SET_MAX_PRICE":
      return { ...state, maxPrice: action.payload };
    case "SET_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
};

const Conditions = () => {
  const [state, dispatch] = useReducer(reducer, {
    minPrice: "",
    maxPrice: "",
    selectedCategory: "",
  });

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

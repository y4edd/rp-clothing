import type { RegisterAction, RegisterState, State } from "@/types/search/search";
import type { Action } from "@/types/search/search";

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_MIN_PRICE":
      return { ...state, minPrice: action.payload };
    case "SET_MAX_PRICE":
      return { ...state, maxPrice: action.payload };
    case "SET_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "SET_KEYWORD":
      return { ...state, keyWord: action.payload };
    default:
      return state;
  }
};

// 検索条件を管理する初期化関数
export const initialState = (searchParams: URLSearchParams) => ({
  minPrice: searchParams.get("minPrice") || "",
  maxPrice: searchParams.get("maxPrice") || "",
  selectedCategory: searchParams.get("category") || "",
  keyWord: searchParams.get("keyword") || "",
});

// 検索条件を保存するためのreducer
export const registerReducer = (state: RegisterState, action: RegisterAction) => {
  switch (action.type) {
    case "SET_CONDITION_NAME":
      return { ...state, conditionName: action.payload };
    case "SET_MIN_PRICE":
      return { ...state, minPrice: action.payload };
    case "SET_MAX_PRICE":
      return { ...state, maxPrice: action.payload };
    case "SET_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "SET_KEYWORD":
      return { ...state, keyWord: action.payload };
    default:
      return state;
  }
};

// 検索条件の保存を管理する初期化関数
// MEMO: もし編集用なのであれば、stateから取得するようにする。
export const registerInitialState = () => ({
  conditionName: "",
  minPrice: "",
  maxPrice: "",
  selectedCategory: "",
  keyWord: "",
});
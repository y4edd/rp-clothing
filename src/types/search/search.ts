export type State = {
  minPrice: string;
  maxPrice: string;
  selectedCategory: string;
  keyWord: string;
};

export type RegisterState = {
  conditionName: string;
  minPrice: string;
  maxPrice: string;
  selectedCategory: string;
  keyWord: string;
};

export type Action =
  | { type: "SET_MIN_PRICE"; payload: string }
  | { type: "SET_MAX_PRICE"; payload: string }
  | { type: "SET_CATEGORY"; payload: string }
  | { type: "SET_KEYWORD"; payload: string };

export type RegisterAction =
  | { type: "SET_CONDITION_NAME"; payload: string }
  | { type: "SET_MIN_PRICE"; payload: string }
  | { type: "SET_MAX_PRICE"; payload: string }
  | { type: "SET_CATEGORY"; payload: string }
  | { type: "SET_KEYWORD"; payload: string };

export type SearchParams = {
  searchParams: Promise<Record<string, string>>;
};

export type SearchParamsProps = {
  minPrice?: string;
  maxPrice?: string;
  selectedCategory?: string;
  keyWord?: string;
};

export type MockSearchParamsProps = {
  minPrice: string;
  maxPrice: string;
  selectedCategory: string;
  keyWord: string;
};

export type FavConditionProps = {
  searchConditionId?: number;
  conditionName: string;
  minPrice?: string;
  maxPrice?: string;
  selectedCategory?: string;
  keyWord?: string;
  condition?: FavConditionProps;
  userId?: string;
};

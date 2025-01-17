export type State = {
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

export type SearchParams = {
  searchParams: Promise<Record<string, string>>
};

export type SearchParamsProps = {
  searchParams: SearchParams
};

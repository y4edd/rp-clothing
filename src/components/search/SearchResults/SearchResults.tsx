import ItemList from "@/components/utils/ItemList/ItemList";
import type { SearchParamsProps } from "@/types/search/search";
import { fetchResults } from "@/utils/apiFunc";

const SearchResults = async ({ searchParams }: { searchParams?: SearchParamsProps }) => {
  // searchParamsが未定義の場合は空オブジェクトをセット
  const safeSearchParams = searchParams ?? {};

  // searchParamsをURLSearchParamsに変換
  const filteredParams = Object.entries(safeSearchParams).reduce(
    (acc, [key, value]) => {
      if (typeof value === "string") acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );

  const query = new URLSearchParams(filteredParams).toString();

  const items = await fetchResults(query);

  return <ItemList items={items} title="検索結果" />;
};

export default SearchResults;

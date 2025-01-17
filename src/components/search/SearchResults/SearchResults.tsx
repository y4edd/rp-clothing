import ItemList from "@/components/utils/ItemList/ItemList";

// APIから検索結果を取得する関数
const fetchResults = async (query: string) => {
  if (!query) return null;

  const apiURL = `http://localhost:3000/api/items/searchByQuery?${query}`;

  try {
    const res = await fetch(apiURL, {
      next: { revalidate: 3600 },
     });

    if (!res.ok) {
      throw new Error(`${res.status} - ${res.statusText}`);
    }
    const items = await res.json();
    return items.items;
  } catch (err) {
    console.error("データの取得に失敗しました:", err);
    return null;
  }
};

const SearchResults = async ({ searchParams }: { searchParams?: Record<string, string> }) => {
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

  return <ItemList items={items} title="検索結果"/>;
};

export default SearchResults;

import Item from "@/components/top/Item/Item";
import styles from "@/components/top/NewItems/NewItems.module.css";

// APIから検索結果を取得する関数
const fetchResults = async (query: string) => {
  if (!query) return null;

  const apiURL = `http://localhost:3000/api/items/searchByQuery?${query}`;

  try {
    const res = await fetch(apiURL, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`${res.status} - ${res.statusText}`);
    }

    return await res.json();
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

  const data = await fetchResults(query);

  if (!data) {
    return <p>データが取得できませんでした。</p>;
  }

  data.Items.map((itemObj: any, index: number) => (
    console.log(itemObj)
  ));

  

  return (
    <div className={styles.container}>
      <h2 className={styles.contentTitle}>検索結果</h2>
      <div className={styles.gridItems}>
        {data.Items.map((itemObj: any, index: number) => (
          <Item
            key={index}
            linkPath={"/"}
            src={itemObj.Item.mediumImageUrls?.[0] || null}
            itemName={itemObj.Item.itemName}
            itemPrice={itemObj.Item.itemPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

import styles from "@/components/top/NewItems/NewItems.module.css";
import Item from "@/components/top/Item/Item";

// APIから検索結果を取得する関数
const fetchResults = async(searchParamas: Record<string, string>) => {
  const query = new URLSearchParams(searchParamas).toString();
  const res = await fetch( `/api/items/searchByQuery?${query}`, {
    // 最新のデータを取得します
    cache: "no-store",
  });

  if(!res.ok) {
    return ;
  }

  return res.json();
};

const SearchResults = async({ searchParams }: { searchParams: Record<string, string | string[]> }) => {
  const keyword = Array.isArray(searchParams.keyword) ? searchParams.keyword[0] : searchParams.keyword || "";
  const category = Array.isArray(searchParams.category) ? searchParams.category[0] : searchParams.category || "";

  // MEMO アイテム情報取得したら消します
  const sampleArray = new Array(15).fill("").map((_, index) => index + 1);

  return (
    <div className={styles.container}>
    <h2 className={styles.contentTitle}>新着アイテム</h2>
    <div className={styles.gridItems}>
      {sampleArray.map((item) => (
        <Item key={item} linkPath="/" />
      ))}
    </div>
  </div>
  );
};

export default SearchResults;
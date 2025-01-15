import BreadList from "@/components/frame/breadList/BreadList";
import SearchModal from "./@modal/page";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import SearchResults from "@/components/search/SearchResults/SearchResults";

// APIから検索結果を取得する関数
const fetchResults = async (apiURL: string) => {
  if (!apiURL) return null;

  const res = await fetch(`${apiURL}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error(`${res}`);
    return null;
  }

  const response = await res.json();
  console.log("🔍取得したデータ:", response);

  return response;
};

const Search = async ({ searchParams }: { searchParams: Record<string, string | string[]> }) => {
  // if (!searchParams) return <p>Loading...</p>;

  // 叩く内部APIのURLを作っている
  // サーバーコンポーネントはNext.jsのルーティングを認識しないので下記のようにURLを指定
  const apiURL = new URL("localhost:3000/api/items/searchByQuery");
  Object.entries(searchParams).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      // 複数の値がある場合は最初の値を使用
      apiURL.searchParams.append(key, value[0]);
    } else {
      apiURL.searchParams.append(key, value);
    }
  });

  const data = await fetchResults(apiURL.toString());

  return (
    <>
      <BreadList bread={[{ link: "/", title: "トップ" }, { link: "/search", title: "検索結果" }]} />
      <PageTitle title={"検索結果"} />
      <SearchModal />
      <SearchResults data={data} />
    </>
  );
};

export default Search;
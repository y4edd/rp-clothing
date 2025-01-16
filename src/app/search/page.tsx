import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import SearchResults from "../../components/search/SearchResults/SearchResults";
import SearchModal from "./@modal/page";

const Search = ({ searchParams }: { searchParams?: Record<string, string> }) => {
  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/search", title: "検索結果" },
        ]}
      />
      <PageTitle title="検索結果" />
      <SearchModal />
      <SearchResults searchParams={searchParams} />
    </>
  );
};

export default Search;

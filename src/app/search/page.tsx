import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import SearchFilters from "@/components/search/SearchFilters/SearchFilters";
import SearchModal from "@/components/search/SearchModal/SearchModal";
import type { SearchParamsProps } from "@/types/search/search";
import SearchResults from "../../components/search/SearchResults/SearchResults";
import { checkAuth } from "@/utils/chechAuth";

const Search = async ({ searchParams }: { searchParams?: Promise<SearchParamsProps> }) => {
  const params = searchParams ? await searchParams : undefined;
  const userId = await checkAuth();

  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/search", title: "検索結果" },
        ]}
      />
      <PageTitle title="検索結果" />
      <SearchModal userId={userId}/>
      <SearchFilters searchParams={params} />
      <SearchResults searchParams={params} />
    </>
  );
};

export default Search;

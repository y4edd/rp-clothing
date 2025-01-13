import BreadList from "@/components/frame/breadList/BreadList";
import SearchModal from "./@modal/page";
import PageTitle from "@/components/frame/pageTitle/PageTitle";

const Search = () => {

  return (
    <>
        <BreadList bread={[{ link: "/", title: "トップ" },{ link: "/search", title: "検索結果"}]} />
        <PageTitle title={"検索結果"} />

      {/* クライアント側で検索条件を変更するモーダル */}
      <SearchModal />

      {/* 検索結果の表示（サーバー側で描画） */}

    </>
  );
};

export default Search;

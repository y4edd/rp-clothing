import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import FavLink from "@/components/mypage/FavLink/FavLink";

const FavItem = () => {
  return (
    <>
      <BreadList
          bread={[
            { link: "/", title: "トップ" },
            { link: "/mypage", title: "マイページ" },
            { link: "/mypage/favorite/item", title: "お気に入り" },
          ]}
      />
      <PageTitle title="お気に入り" />
      <FavLink />
    </>
  )
}

export default FavItem;
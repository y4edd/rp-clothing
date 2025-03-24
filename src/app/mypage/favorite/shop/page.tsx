import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import FavLink from "@/components/mypage/FavLink/FavLink";

const FavShop = () => {
  return (
    <>
      <BreadList
          bread={[
            { link: "/", title: "トップ" },
            { link: "/mypage", title: "マイページ" },
            { link: "/mypage/favorite/shop", title: "お気に入り" },
          ]}
      />
      <PageTitle title="お気に入り" />
      <FavLink />
    </>
  )
}

export default FavShop;
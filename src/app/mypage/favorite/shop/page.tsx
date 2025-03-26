import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import FavLink from "@/components/mypage/FavLink/FavLink";
import FavShopList from "@/components/mypage/FavShopList/FavShopList";
import UnauthorizedAccess from "@/components/user/UnauthorizedAccess/UnauthorizedAccess";
import { getFavShops } from "@/utils/apiFunc";
import { checkAuth } from "@/utils/checkAuth";
import { getTokenFromCookie } from "@/utils/cookie";

const FavShop = async() => {
  const sessionId = await getTokenFromCookie();
  const userId = await checkAuth();
  if (!userId || !sessionId) {
    return <UnauthorizedAccess />;
  }

  // お気に入りショップのみ取得する
  const favShopsObj = await getFavShops(sessionId);
  const favShopsArr = favShopsObj.favShops; 

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
      <FavShopList favShopsArr={favShopsArr} userId={userId} />
    </>
  )
}

export default FavShop;
import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import FavItemList from "@/components/mypage/FavItemList/FavItemList";
import FavLink from "@/components/mypage/FavLink/FavLink";
import UnauthorizedAccess from "@/components/user/UnauthorizedAccess/UnauthorizedAccess";
import { getFavItems } from "@/utils/apiFunc";
import { checkAuth } from "@/utils/checkAuth";
import { getTokenFromCookie } from "@/utils/cookie";

const FavItem = async () => {
  const sessionId = await getTokenFromCookie();
  const userId = await checkAuth();
  if (!userId || !sessionId) {
    return <UnauthorizedAccess />;
  }

  // お気に入りアイテムのみ取得する
  const favItemsObj = await getFavItems(sessionId);
  const favItems = favItemsObj.items;
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
      <FavItemList items={favItems} />
    </>
  );
};

export default FavItem;

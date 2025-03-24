import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import FavItemList from "@/components/mypage/FavItemList/FavItemList";
import FavLink from "@/components/mypage/FavLink/FavLink";
import UnauthorizedAccess from "@/components/user/UnauthorizedAccess/UnauthorizedAccess";
import { ItemData } from "@/types/item/item";
import { getNewItems } from "@/utils/apiFunc";
import { checkAuth } from "@/utils/checkAuth";

const FavItem = async() => {
  const userId = await checkAuth();
  // お気に入りアイテムのみ取得する
  const newItems: ItemData[] | null = await getNewItems();

  if (!userId) {
    return <UnauthorizedAccess />;
  }

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
      <FavItemList items={newItems} />
    </>
  )
}

export default FavItem;
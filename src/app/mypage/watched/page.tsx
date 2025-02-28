import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import WatchedContainer from "@/components/mypage/WatchedContainer/WatchedContainer";
import UnauthorizedAccess from "@/components/user/UnauthorizedAccess/UnauthorizedAccess";
import { checkAuth } from "@/utils/chechAuth";
import { fetchWatched } from "@/utils/fetchWatched";

const Watched = async () => {
  const userId = await checkAuth();

  if (!userId) {
    return <UnauthorizedAccess />;
  }

  const data = await fetchWatched(userId);

  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/mypage", title: "マイページ" },
          { link: "/mypage/watched", title: "閲覧履歴" },
        ]}
      />
      <PageTitle title={"閲覧履歴"} />
      <WatchedContainer histories={data?.histories || []} />
    </>
  );
};

export default Watched;

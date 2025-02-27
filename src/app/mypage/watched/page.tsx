import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import { checkAuth } from "@/utils/chechAuth";
import { fetchWatched } from "@/utils/fetchWatched";
import UnauthorizedAccess from "@/components/user/UnauthorizedAccess/UnauthorizedAccess";
import WatchedContainer from "@/components/mypage/WatchedContainer/WatchedContainer";

type Props = {
  title: string;
}

const Watched = async ({ title }: Props) => {
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
      <WatchedContainer title={title} histories={data?.histories || []}/>
    </>
  );
};

export default Watched;

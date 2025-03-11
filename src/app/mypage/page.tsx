import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import MypageContents from "@/components/mypage/MypageContents/MypageContents";
import UnauthorizedAccess from "@/components/user/UnauthorizedAccess/UnauthorizedAccess";
import { checkAuth } from "@/utils/checkAuth";

const MyPage = async () => {
  const userId = await checkAuth();
  if (!userId) {
    return <UnauthorizedAccess />;
  }

  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/mypage", title: "マイページ" },
        ]}
      />
      <PageTitle title={"マイページ"} />
      <MypageContents />
    </>
  );
};

export default MyPage;

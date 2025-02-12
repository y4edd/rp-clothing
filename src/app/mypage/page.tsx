import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import MypageContents from "@/components/mypage/MypageContents/MypageContents";
import UnauthorizedAccess from "@/components/user/UnauthorizedAccess/UnauthorizedAccess";
import { checkAuth } from "@/utils/apiFunc";
import { getTokenFromCookie } from "@/utils/cookie";
const MyPage = async() => {
  const token = await getTokenFromCookie();
  if (!token) {
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

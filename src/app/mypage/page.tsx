import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import MypageContents from "@/components/mypage/MypageContents/MypageContents";
import { AuthProvider } from "@/contexts/Countcontexts";

const MyPage = async () => {
  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/mypage", title: "マイページ" },
        ]}
      />
      <PageTitle title={"マイページ"} />
      <AuthProvider>
        <MypageContents />
      </AuthProvider>
    </>
  );
};

export default MyPage;

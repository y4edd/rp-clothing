import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import MypageContents from "@/components/mypage/MypageContents/MypageContents";

const MyPage = async() => {
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

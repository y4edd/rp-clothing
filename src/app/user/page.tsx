import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import UserDetail from "@/components/user/UserDetail/UserDetail";

const UserPage = () => {
  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/mypage", title: "マイページ" },
          { link: "/user", title: "ユーザー情報確認" },
        ]}
      />
      <PageTitle title={"ユーザー情報確認"} />
      <UserDetail />
    </>
  );
};

export default UserPage;

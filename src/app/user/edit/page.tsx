import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import UserEdit from "@/components/user/UserEdit/UserEdit";

const UserEditPage = () => {
  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/mypage", title: "マイページ" },
          { link: "/user", title: "ユーザー情報確認・編集" },
        ]}
      />
      <PageTitle title={"ユーザー情報確認・編集"} />
      <UserEdit />
    </>
  );
};

export default UserEditPage;

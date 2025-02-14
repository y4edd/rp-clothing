import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import UnauthorizedAccess from "@/components/user/UnauthorizedAccess/UnauthorizedAccess";
import UserEdit from "@/components/user/UserEdit/UserEdit";
import { getTokenFromCookie } from "@/utils/cookie";

const UserEditPage = async() => {
  const token = await getTokenFromCookie();

  if(!token) {
    return <UnauthorizedAccess />;
  }

  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/mypage", title: "マイページ" },
          { link: "/edit", title: "ユーザー情報編集" },
        ]}
      />
      <PageTitle title={"ユーザー情報編集"} />
      <UserEdit/>
    </>
  );
};

export default UserEditPage;

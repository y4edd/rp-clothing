import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import UnauthorizedAccess from "@/components/user/UnauthorizedAccess/UnauthorizedAccess";
import UserEdit from "@/components/user/UserEdit/UserEdit";
import { checkAuth, getUserInfo } from "@/utils/apiFunc";

const UserEditPage = async () => {
  const userId = await checkAuth();
  if (!userId) {
    return <UnauthorizedAccess />;
  }

  const userDataJson = await getUserInfo(userId);
  const userDataArr = await userDataJson.json();
  const userData = userDataArr[0];

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
      <UserEdit userData={userData} />
    </>
  );
};

export default UserEditPage;

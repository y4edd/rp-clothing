import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import UnauthorizedAccess from "@/components/user/UnauthorizedAccess/UnauthorizedAccess";
import UserEdit from "@/components/user/UserEdit/UserEdit";
import { redisClient } from "@/lib/redis/redis";
import { getUserInfo } from "@/utils/apiFunc";
import { getTokenFromCookie } from "@/utils/cookie";

const UserEditPage = async () => {
  const sessionId = await getTokenFromCookie();
  if (!sessionId) {
    return <UnauthorizedAccess />;
  }

  const userIdJason = await redisClient.get(`sessionId:${sessionId}`);
  if (!userIdJason) {
    return <UnauthorizedAccess />;
  }

  const userId = JSON.parse(userIdJason).userId;
  if(!userId) {
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

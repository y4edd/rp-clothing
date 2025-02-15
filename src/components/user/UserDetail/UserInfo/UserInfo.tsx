import { getUserInfo } from "@/utils/apiFunc";
import styles from "./UserInfo.module.css";
import { getTokenFromCookie } from "@/utils/cookie";
import UnauthorizedAccess from "../../UnauthorizedAccess/UnauthorizedAccess";
import { redisClient } from "@/lib/redis/redis";

const UserInfo = async() => {
  const sessionId = await getTokenFromCookie();
  if (!sessionId) {
    return <UnauthorizedAccess />;
  }

  const userIdJason = await redisClient.get(`sessionId:${sessionId}`);
  if (!userIdJason) {
    return <UnauthorizedAccess />;
  }

  const userId = JSON.parse(userIdJason).userId;
  if (!userId) {
    return <UnauthorizedAccess />;
  }

  const userDataJson = await getUserInfo(userId);
  const userDataArr = await userDataJson.json();
  const userData = userDataArr[0];

  const [year, month, day] = userData.birthday.split("-");

  return (
    <dl className={styles.userDetail}>
      <dt>ユーザ名</dt>
      <dd>{userData.name}</dd>
      <dt>メールアドレス</dt>
      <dd>{userData.email}</dd>
      <dt>生年月日</dt>
      <dd className={styles.birthday}>
        <span>{year}&emsp;年</span>
        <span>{month}&emsp;月</span>
        <span>{day}&emsp;日</span>
      </dd>
      <dt>パスワード</dt>
      <dd>**********</dd>
    </dl>
  );
};

export default UserInfo;

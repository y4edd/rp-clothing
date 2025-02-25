import { redisClient } from "@/lib/redis/redis";
import { getTokenFromCookie } from "./cookie";

// セッションIDをcookieから取得し、ユーザーIDをredisから取得する非同期関数
export const checkAuth = async () => {
  const sessionId = await getTokenFromCookie();
  if (!sessionId) {
    console.log("sessionId");
    return false;
  }

  const userIdJason = await redisClient.get(`sessionId:${sessionId}`);
  if (!userIdJason) {
    console.log("useIdJason");
    return false;
  }

  const userId = JSON.parse(userIdJason).userId;
  if (!userId) {
    return false;
  }
  return userId;
};

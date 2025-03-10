import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import LoginComponent from "@/components/user/Login/LoginComponent/LoginComponent";
import RegisterComponent from "@/components/user/Login/RegisterComponent/RegisterComponent";
import { cookies } from "next/headers";
import styles from "./page.module.css";

const Login = async () => {
  // サーバーコンポーネントでHTTPリクエストCookieを読み取り、
  // Server ActionsかRoute HandlerでCookieを
  // 読み書きできる関数（cookies）を使う
  const cookieStore = await cookies();
  const token = cookieStore.get("sessionId");
  // undefinedを阻止
  let sessionId = "";
  if (token) {
    sessionId = token.value;
  }

  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/login", title: "ログイン" },
        ]}
      />
      <PageTitle title="ログイン" />
      <div className={styles.main}>
        <LoginComponent sessionId={sessionId} />
        <RegisterComponent />
      </div>
    </>
  );
};

export default Login;

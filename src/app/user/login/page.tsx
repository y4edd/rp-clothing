import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import LoginComponent from "@/components/user/Login/LoginComponent/LoginComponent";
import RegisterComponent from "@/components/user/Login/RegisterComponent/RegisterComponent";
import styles from "./page.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/login", title: "ログイン" },
        ]}
      />
      <PageTitle title="ログイン" />
      <div className={styles.main}>
        <LoginComponent />
        <RegisterComponent />
      </div>
    </div>
  );
};

export default Login;

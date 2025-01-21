import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import RegisterForm from "@/components/user/Register/RegisterForm";
import styles from "./page.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/register", title: "新規会員登録" },
        ]}
      />
      <PageTitle title={"新規会員登録"} />
      <div className={styles.registrationPage}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;

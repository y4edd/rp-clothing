import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import styles from "./page.module.css";
import RegisterForm from "@/components/user/Register/RegisterForm";

const Register = () => {
  return (
    <>
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
    </>
  );
};

export default Register;

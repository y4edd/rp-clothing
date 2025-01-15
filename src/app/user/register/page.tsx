import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import RegistrationForm from "@/components/user/Register/RegisterForm";
import styles from "./page.module.css";

const Registration = () => {
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
        <RegistrationForm />
      </div>
    </>
  );
};

export default Registration;

import RegistrationForm from "@/components/user/register/registerForm";
import styles from "./page.module.css";
import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";

const Registration = () => {
  return (
    <>
      <BreadList bread={[{ link: "/", title: "トップ" },{link:"/register",title:"新規会員登録"}]} />
      <PageTitle title={"新規会員登録"} />
      <div className={styles.registrationPage}>
        <RegistrationForm />
      </div>
    </>
  );
};

export default Registration;

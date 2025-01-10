import RegistrationForm from "@/components/user/registration/registrationForm";
import styles from "./page.module.css";

const Registration = () => {
  return (
    <div className={styles.registrationPage}>
      {/* //Memo:現段階でbreadListをHeaderで設定しているため、後で各インポート。 */}
      <RegistrationForm />
    </div>
  );
};

export default Registration;

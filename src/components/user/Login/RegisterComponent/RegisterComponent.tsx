import LinkBtn from "@/components/utils/link/LinkBtn";
import styles from "./RegisterComponent.module.css";
import RegisterDetails from "./RegisterDetails/RegisterDetails";

const RegisterComponent = () => {
  return (
    <div className={styles.register}>
      <h2>初めてのお客様</h2>
      <div className={styles.registerContents}>
        <RegisterDetails />
        <div className={styles.btn}>
          <LinkBtn pathName="/user/register" text="新規会員登録（無料）" btnColor="white" />
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;

"use client";
import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css";
import { useRouter } from "next/navigation";
import styles from "./RegisterComponent.module.css";
import RegisterDetails from "./RegisterDetails/RegisterDetails";

const RegisterComponent = () => {
  const router = useRouter();
  const registerHandler = () => {
    router.push("/user/register");
  };
  return (
    <div className={styles.register}>
      <h2>初めてのお客様</h2>
      <div className={styles.registerContents}>
        <RegisterDetails />
        <div className={styles.btn}>
          <Button
            type="button"
            className={`${buttonStyles.white} ${styles.btn}`}
            text="新規会員登録（無料）"
            onClick={registerHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;

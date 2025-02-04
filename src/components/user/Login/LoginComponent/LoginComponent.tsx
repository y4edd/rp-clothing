"use client";

import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css";
import type { LoginProps } from "@/types/user/user";
import { useForm } from "react-hook-form";
import styles from "./LoginComponent.module.css";
import LoginEmail from "./LoginEmail/LoginEmail";
import LoginPassword from "./LoginPassword/LoginPassword";

const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginProps) => {
    //MEMO: api処理を実装予定
    console.log(data);
  };
  return (
    <div className={styles.login}>
      <h2>ログイン</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <LoginEmail register={register} errors={errors} />
        <LoginPassword register={register} errors={errors} />
        <div className={styles.btn}>
          <Button type="submit" className={`${buttonStyles.black} ${styles.btn}`} text="ログイン" />
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;

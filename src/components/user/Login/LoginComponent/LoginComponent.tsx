"use client";

import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css";
import type { LoginProps } from "@/types/user/user";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./LoginComponent.module.css";
import LoginEmail from "./LoginEmail/LoginEmail";
import LoginPassword from "./LoginPassword/LoginPassword";
import { getUserId } from "@/utils/apiFunc";

const LoginComponent = () => {
  const [loginError, setLoginError] = useState("");
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
    try {
      const response: Response = await getUserId(data);

      if (!response.ok) {
        const res = await response.json();
        setLoginError(res.message || "ログインに失敗しました。");
        return;
      }
      setLoginError("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.login}>
      <h2>ログイン</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <LoginEmail register={register} errors={errors} />
        <LoginPassword register={register} errors={errors} />
        <div className={styles.btn}>
          {loginError && <div className="error">{loginError}</div>}
          <Button type="submit" className={`${buttonStyles.black} ${styles.btn}`} text="ログイン" />
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;

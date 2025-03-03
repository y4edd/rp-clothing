"use client";

import Button from "@/components/utils/button/Button";
import { showToast } from "@/components/utils/toast/toast";
import type { LoginProps } from "@/types/user/user";
import { login } from "@/utils/apiFunc";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./LoginComponent.module.css";
import LoginEmail from "./LoginEmail/LoginEmail";
import LoginPassword from "./LoginPassword/LoginPassword";

type SessionId = {
  sessionId: string;
}

const LoginComponent = ({sessionId}: SessionId) => {
  const router = useRouter();
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
      const response: Response = await login(data, sessionId);

      if (!response.ok) {
        const res = await response.json();
        setLoginError(res.message || "ログインに失敗しました。");
        return;
      } else {
        showToast("ログインに成功しました！");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
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
        <div>
          <Button type="submit" className={styles.btn} text="ログイン" />
        </div>
        {loginError && <div className={styles.error}>{loginError}</div>}
      </form>
    </div>
  );
};

export default LoginComponent;

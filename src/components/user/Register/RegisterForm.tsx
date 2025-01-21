"use client";

import type { FormProps } from "@/types/user/user";
import { useForm } from "react-hook-form";
import Birthday from "./Form/Birthday/Birthday";
import ConfirmPassword from "./Form/ConfirmPassword/ConfirmPassword";
import Email from "./Form/Email/Email";
import Name from "./Form/Name/Name";
import Password from "./Form/Password/Password";
import styles from "./RegisterForm.module.css";
import { useState } from "react";
import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css";
import {
  showToast,
  ToastContainerComponent,
} from "@/components/utils/toast/toast";
import "react-toastify/ReactToastify.css";

const today = new Date();
const currentYear = today.getFullYear();

const RegisterForm = () => {
  const [registerError, setRegisterError] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      name: "",
      email: "",
      year: currentYear,
      month: 1,
      day: 1,
      password: "",
      confirmPassword: "",
      birthday: undefined,
    },
  });

  const onSubmit = async (data: FormProps) => {
    const birthdayValue = new Date(
      `${data.year}-${data.month}-${data.day}T00:00:00`
    );
    setValue("birthday", birthdayValue);
    const { year, month, day, ...newDate } = data;
    const registerDate = { ...newDate, birthday: birthdayValue };
    try {
      const res = await fetch("/api/user/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(registerDate),
      });
      console.log(res.status);

      if (!res.ok) {
        setRegisterError("※このメールアドレスはすでに登録しています。");
        return;
      }
      showToast("会員登録が完了しました。", "success");
      setRegisterError("");
    } catch (error) {
      console.error("エラー内容:", error);
      setRegisterError("※サーバーエラーが発生しました。");
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Name register={register} errors={errors} />
        <Email register={register} errors={errors} />
        <Birthday register={register} />
        <Password register={register} errors={errors} />
        <ConfirmPassword
          register={register}
          errors={errors}
          getValues={getValues}
        />
        {registerError && <p className={styles.error}>{registerError}</p>}
        <div className={styles.btn}>
          <Button
            type="submit"
            className={buttonStyles.black}
            text="会員登録"
          />
        </div>
      </form>
      <ToastContainerComponent />
    </>
  );
};

export default RegisterForm;

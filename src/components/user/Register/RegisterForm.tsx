"use client";

import type { FormProps } from "@/types/user/user";
import { useForm } from "react-hook-form";
import Birthday from "./Form/Birthday/Birthday";
import ConfirmPassword from "./Form/ConfirmPassword/ConfirmPassword";
import Email from "./Form/Email/Email";
import Name from "./Form/Name/Name";
import Password from "./Form/Password/Password";
import styles from "./RegisterForm.module.css";

const today = new Date();
const currentYear = today.getFullYear();

const RegisterForm = () => {
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

  const onSubmit = (data: FormProps) => {
    const birthdayValue = new Date(`${data.year}-${data.month}-${data.day}`);
    setValue("birthday", birthdayValue);
    const { year, month, day, ...newDate } = data;
    const registerDate = { ...newDate, birthday: birthdayValue };
    console.log(registerDate);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Name register={register} errors={errors} />
      <Email register={register} errors={errors} />
      <Birthday register={register} />
      <Password register={register} errors={errors} />
      <ConfirmPassword register={register} errors={errors} getValues={getValues} />
      {/* MEMO:ボタンは後から追加予定！ */}
      <button type="submit">会員登録</button>
    </form>
  );
};

export default RegisterForm;

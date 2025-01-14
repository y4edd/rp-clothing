"use client";

import type { FormProps } from "@/types/user/user";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Birthday from "./form/birthday/birthday";
import ConfirmPassword from "./form/confirmPassword/confirmPassword";
import Email from "./form/email/email";
import Name from "./form/name/name";
import Password from "./form/password/password";
import styles from "./registerForm.module.css";

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
      birthday: undefined,
      password: "",
      confirmPassword: "",
    },
  });

  //BirthdayのState管理
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = (data: FormProps) => {
    const birthdayValue = new Date(`${year}-${month}-${day}`);
    setValue("birthday", birthdayValue);
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Name register={register} errors={errors} />
      <Email register={register} errors={errors} />
      <Birthday
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
        day={day}
        setDay={setDay}
      />
      <Password register={register} errors={errors} />
      <ConfirmPassword register={register} errors={errors} getValues={getValues} />
      {/* MEMO:ボタンは後から追加予定！ */}
      <button type="submit">会員登録</button>
    </form>
  );
};

export default RegisterForm;

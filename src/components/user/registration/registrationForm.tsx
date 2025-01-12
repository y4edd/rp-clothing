"use client";

import type { FormProps } from "@/types/registration/registration";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Birthday from "./form/birthday/birthday";
import ComfirmpasswordInput from "./form/confirmPassword";
import EmailInput from "./form/email";
import NameInput from "./form/name";
import PasswordInput from "./form/password";
import styles from "./registrationForm.module.css";

const RegistrationForm = () => {
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
      <NameInput register={register} errors={errors} />
      <EmailInput register={register} errors={errors} />
      <Birthday
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
        day={day}
        setDay={setDay}
      />
      <PasswordInput register={register} errors={errors} />
      <ComfirmpasswordInput
        register={register}
        errors={errors}
        getValues={getValues}
      />
      {/* MEMO:ボタンは後から追加予定！ */}
      <button type="submit">会員登録</button>
    </form>
  );
};

export default RegistrationForm;

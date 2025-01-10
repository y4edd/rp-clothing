"use client";

import { useState } from "react";
import Input from "./form/input";
import styles from "./registrationForm.module.css";
import Birthday from "./form/birthday";
import { FormProps } from "@/types/registration/registration";

const RegistrationForm = () => {
  const [formArray, setFormArray] = useState<FormProps>({
    name: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <form className={styles.form}>
      <Input
        title="ユーザー名"
        type="text"
        name="name"
        text={formArray.name}
        setFormArray={setFormArray}
      />
      <Input
        title="メールアドレス"
        type="email"
        name="email"
        text={formArray.email}
        setFormArray={setFormArray}
      />
      <Birthday setFormArray={setFormArray} name="birthday" />
      <Input
        title="パスワード"
        type="password"
        name="password"
        text={formArray.password}
        setFormArray={setFormArray}
      />
      <Input
        title="パスワード確認"
        type="password"
        name="confirmPassword"
        text={formArray.confirmPassword}
        setFormArray={setFormArray}
      />
      {/* MEMO:ボタンは後から追加予定！ */}
    </form>
  );
};

export default RegistrationForm;

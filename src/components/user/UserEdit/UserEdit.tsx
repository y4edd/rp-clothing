"use client";
import type { EditUserProps } from "@/types/user/user";
import { editUser } from "@/utils/apiFunc";
import { useForm } from "react-hook-form";
import EditForm from "./EditForm/EditForm";
import styles from "./UserEdit.module.css";
import { useState } from "react";

type UserData = {
  name: string;
  email: string;
  birthday: string;
}

type UserEditProps = {
  userData: UserData;
}

const UserEdit = ({userData}: UserEditProps) => {
  const [defaultUserData, setDefaultUserData] = useState();
  const [serverError, setServerError] = useState();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EditUserProps>({
    defaultValues: {
      name: userData.name,
      email: userData.email,
    },
  });

  const onSubmit = async (data: EditUserProps) => {
    const response = await editUser(data);
    const res = await response.json();

    if(!res.ok) {
      setServerError(res.message);
    }
    return;
  };

  return (
    <div className={styles.container}>
      <EditForm register={register} errors={errors} handleSubmit={handleSubmit(onSubmit)} birthDay={userData.birthday} />
      <div className={styles.errorMessage}>{serverError}</div>
    </div>
  );
};

export default UserEdit;

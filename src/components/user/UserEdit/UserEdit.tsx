"use client";
import type { EditUserProps } from "@/types/user/user";
import { editUser } from "@/utils/apiFunc";
import { useState } from "react";
import { useForm } from "react-hook-form";
import EditForm from "./EditForm/EditForm";
import styles from "./UserEdit.module.css";
import { useRouter } from "next/navigation";

type UserData = {
  name: string;
  email: string;
  birthday: string;
};

type UserEditProps = {
  userData: UserData;
};

const UserEdit = ({ userData }: UserEditProps) => {
  const [serverError, setServerError] = useState();
  const router = useRouter();
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

    if (!res.ok) {
      setServerError(res.message);
    }
    setTimeout(() => {
      router.push("/user");
    }, 500);
    return;
  };

  return (
    <div className={styles.container}>
      <EditForm
        register={register}
        errors={errors}
        handleSubmit={handleSubmit(onSubmit)}
        birthDay={userData.birthday}
      />
      <div className={styles.errorMessage}>{serverError}</div>
    </div>
  );
};

export default UserEdit;

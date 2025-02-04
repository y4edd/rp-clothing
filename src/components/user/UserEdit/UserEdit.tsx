"use client";
import styles from "./UserEdit.module.css";
import { useForm } from "react-hook-form";
import type { EditUserProps } from "@/types/user/user";
import EditForm from "./EditForm/EditForm";

const UserEdit = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EditUserProps>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: EditUserProps) => {
    // MEMO: ここでdataを使ってAPI通信を行う
    console.log(data);
  };
  return (
    <div className={styles.container}>
      <EditForm
        register={register}
        errors={errors}
        handleSubmit={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default UserEdit;

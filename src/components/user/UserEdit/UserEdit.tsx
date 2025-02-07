"use client";
import type { EditUserProps } from "@/types/user/user";
import { useForm } from "react-hook-form";
import EditForm from "./EditForm/EditForm";
import styles from "./UserEdit.module.css";

const UserEdit = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EditUserProps>({
    defaultValues: {
      // MEMO: ここでAPI作成後、初期値を設定
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
      <EditForm register={register} errors={errors} handleSubmit={handleSubmit(onSubmit)} />
    </div>
  );
};

export default UserEdit;

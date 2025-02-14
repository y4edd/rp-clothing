"use client";
import type { EditUserProps } from "@/types/user/user";
import { useForm } from "react-hook-form";
import EditForm from "./EditForm/EditForm";
import styles from "./UserEdit.module.css";
import { editUser } from "@/utils/apiFunc";

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

  const onSubmit = async(data: EditUserProps) => {
    // !dataならエラーメッセージが出る
    // MEMO: ここでdataを使ってAPI通信を行う
    const response = await editUser(data);
  };
  return (
    <div className={styles.container}>
      <EditForm register={register} errors={errors} handleSubmit={handleSubmit(onSubmit)} />
      {/* ここにエラーメッセージ */}
    </div>
  );
};

export default UserEdit;

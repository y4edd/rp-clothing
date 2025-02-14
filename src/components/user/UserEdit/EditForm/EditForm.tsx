import { errorMessages } from "@/lib/user/register/errorMessage";
import type { EditUserProps } from "@/types/user/user";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import Birthday from "../Birthday/Birthday";
import InputField from "../InputField/InputField";
import UserEditButtons from "../UserEditButtons/UserEditButtons";

type Prop = {
  register: UseFormRegister<EditUserProps>;
  errors: FieldErrors<EditUserProps>;
  handleSubmit: () => void;
  birthDay: string;
};

const EditForm = ({ register, errors, handleSubmit, birthDay }: Prop) => {
  return (
    <form onSubmit={handleSubmit}>
      <InputField id="name" label="ユーザー名" example="RP太郎" errors={errors.name?.message}>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: errorMessages.name.require,
            maxLength: { value: 20, message: errorMessages.name.maxLength },
          })}
        />
      </InputField>
      <InputField
        id="email"
        label="メールアドレス"
        example="example@clothing.com"
        errors={errors.email?.message}
      >
        <input
          type="text"
          id="email"
          {...register("email", {
            required: errorMessages.email.require,
            validate: {
              noSpaces: (value) => !/\s/.test(value) || errorMessages.email.patternSpace,
              isEmailFormat: (value) =>
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                  value,
                ) || errorMessages.email.patternFormat,
            },
          })}
        />
      </InputField>
      {/* Memo:Propsで誕生日を渡す */}
      <Birthday birthDay={birthDay} />

      <InputField
        id="password"
        label="パスワード"
        example="password"
        errors={errors.password?.message}
      >
        <input
          type="password"
          id="password"
          {...register("password", {
            required: errorMessages.password.require,
            maxLength: {
              value: 19,
              message: errorMessages.password.maxLength,
            },
            minLength: {
              value: 6,
              message: errorMessages.password.minLength,
            },
          })}
        />
      </InputField>

      {/* Memo:コンポーネント内部で処理完結していそうなためPropsでデータ渡す必要ないかも */}
      <UserEditButtons />
    </form>
  );
};

export default EditForm;

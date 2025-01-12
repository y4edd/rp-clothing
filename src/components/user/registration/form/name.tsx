import { errorMessages } from "@/lib/user/register/message";
import type { FormProps } from "@/types/registration/registration";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import styles from "./Input.module.css";

interface InputProps {
  register: UseFormRegister<FormProps>;
  errors: FieldErrors<FormProps>;
}

const NameInput = ({ register, errors }: InputProps) => {
  return (
    <dl className={styles.table}>
      <dt>
        <label htmlFor="userName">ユーザー名</label>
        {errors.name?.message && (
          <label htmlFor="userName" className={styles.error}>
            {errors.name.message}
          </label>
        )}
      </dt>
      <dd>
        <input
          type="text"
          id="userName"
          {...register("name", {
            required: errorMessages.name.require,
            maxLength: { value: 20, message: errorMessages.name.maxLength },
          })}
          name="name"
        />
      </dd>
      <dd>
        <p className={styles.attention}>※例：RP太郎</p>
      </dd>
    </dl>
  );
};

export default NameInput;

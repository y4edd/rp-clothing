import { errorMessages } from "@/lib/user/register/errorMessage";
import type { FormProps } from "@/types/user/user";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import styles from "../Input.module.css";

interface InputProps {
  register: UseFormRegister<FormProps>;
  errors: FieldErrors<FormProps>;
}

const Name = ({ register, errors }: InputProps) => {
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
          autoComplete="off"
        />
      </dd>
      <dd>
        <p className={styles.attention}>※例：RP太郎</p>
      </dd>
    </dl>
  );
};

export default Name;

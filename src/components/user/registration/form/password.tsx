import { errorMessages } from "@/lib/user/register/message";
import type { FormProps } from "@/types/registration/registration";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import styles from "./input.module.css";

interface InputProps {
  register: UseFormRegister<FormProps>;
  errors: FieldErrors<FormProps>;
}

const PasswordInput = ({ register, errors }: InputProps) => {
  return (
    <dl className={styles.table}>
      <dt>
        <label htmlFor="password">パスワード</label>
        {errors.password?.message && (
          <label htmlFor="password" className={styles.error}>
            {errors.password.message}
          </label>
        )}
      </dt>
      <dd>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: errorMessages.password.require,
            maxLength: { value: 19, message: errorMessages.password.maxLength },
            minLength: { value: 6, message: errorMessages.password.minLength },
          })}
          name="password"
        />
      </dd>
      <dd>
        <p className={styles.attention}>※例：password</p>
      </dd>
    </dl>
  );
};

export default PasswordInput;

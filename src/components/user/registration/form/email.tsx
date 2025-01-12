import { errorMessages } from "@/lib/user/register/message";
import type { FormProps } from "@/types/registration/registration";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import styles from "./Input.module.css";

interface InputProps {
  register: UseFormRegister<FormProps>;
  errors: FieldErrors<FormProps>;
}

const EmailInput = ({ register, errors }: InputProps) => {
  return (
    <dl className={styles.table}>
      <dt>
        <label htmlFor="email">メールアドレス</label>
        {errors.email?.message && (
          <label htmlFor="email" className={styles.error}>
            {errors.email.message}
          </label>
        )}
      </dt>
      <dd>
        <input
          type="text"
          id="email"
          {...register("email", {
            required: errorMessages.email.require,
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: errorMessages.email.pattern,
            },
          })}
          name="email"
        />
      </dd>
      <dd>
        <p className={styles.attention}>※例：example@clothing.com</p>
      </dd>
    </dl>
  );
};

export default EmailInput;

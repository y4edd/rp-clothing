import type { FormProps } from "@/types/registration/registration";
import styles from "./Input.module.css";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { errorMessages } from "@/lib/user/register/message";

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
          type="email"
          id="email"
          {...register("email", {
            required: errorMessages.email.require,
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

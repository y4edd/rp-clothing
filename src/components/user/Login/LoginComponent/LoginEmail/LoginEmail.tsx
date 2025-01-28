import { errorMessages } from "@/lib/user/login/errorMessage";
import type { loginProps } from "@/types/user/user";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import styles from "./LoginEmail.module.css";

interface loginEmailProps {
  register: UseFormRegister<loginProps>;
  errors: FieldErrors<loginProps>;
}

const LoginEmail = ({ register, errors }: loginEmailProps) => {
  return (
    <dl className={styles.email}>
      <dt>
        <label htmlFor="email">メールアドレス</label>
        {errors.email && (
          <span className={styles.error} data-testid="email-error">
            {errors.email?.message}
          </span>
        )}
      </dt>
      <dd>
        <input
          type="text"
          id="email"
          {...register("email", {
            required: errorMessages.email.require,
          })}
          name="email"
        />
      </dd>
      <dd className={styles.attention}>例：example.@clothing.com</dd>
    </dl>
  );
};

export default LoginEmail;

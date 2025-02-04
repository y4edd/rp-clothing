import { errorMessages } from "@/lib/user/login/errorMessage";
import type { LoginProps } from "@/types/user/user";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import styles from "./LoginPassword.module.css";

type loginPasswordProps = {
  register: UseFormRegister<LoginProps>;
  errors: FieldErrors<LoginProps>;
};

const LoginPassword = ({ register, errors }: loginPasswordProps) => {
  return (
    <dl className={styles.password}>
      <dt>
        <label htmlFor="password">パスワード</label>
        {errors.password && (
          <span className={styles.error} data-testid="password-error">
            {errors.password?.message}
          </span>
        )}
      </dt>
      <dd>
        <input
          type="password"
          id="password"
          data-testid="input"
          {...register("password", {
            required: errorMessages.password.require,
            maxLength: { value: 19, message: errorMessages.password.maxLength },
            minLength: { value: 6, message: errorMessages.password.minLength },
          })}
        />
      </dd>
      <dd className={styles.attention}>例：password</dd>
    </dl>
  );
};

export default LoginPassword;

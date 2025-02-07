import { errorMessages } from "@/lib/user/login/errorMessage";
import type { LoginProps } from "@/types/user/user";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import styles from "./LoginEmail.module.css";

type loginEmailProps = {
  register: UseFormRegister<LoginProps>;
  errors: FieldErrors<LoginProps>;
};

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
            validate: {
              noSpaces: (value) => !/\s/.test(value) || errorMessages.email.patternSpace,
              isEmailFormat: (value) =>
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                  value,
                ) || errorMessages.email.patternFormat,
            },
          })}
          autoComplete="off"
        />
      </dd>
      <dd className={styles.attention}>例：example.@clothing.com</dd>
    </dl>
  );
};

export default LoginEmail;

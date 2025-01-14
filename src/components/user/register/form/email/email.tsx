import { errorMessages } from "@/lib/user/register/errorMessage";
import type { FormProps } from "@/types/user/user";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import styles from "../input.module.css";

interface InputProps {
  register: UseFormRegister<FormProps>;
  errors: FieldErrors<FormProps>;
}

const Email = ({ register, errors }: InputProps) => {
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
            validate: {
              noSpaces: (value) =>
                !/\s/.test(value) || errorMessages.email.patternSpace,
              isEmailFormat: (value) =>
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                  value
                ) || errorMessages.email.patternFormat,
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

export default Email;

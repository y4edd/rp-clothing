import { errorMessages } from "@/lib/user/register/errorMessage";
import type { FormProps } from "@/types/user/user";
import type { FieldErrors, UseFormGetValues, UseFormRegister } from "react-hook-form";
import styles from "../input.module.css";

interface InputProps {
  register: UseFormRegister<FormProps>;
  errors: FieldErrors<FormProps>;
  getValues: UseFormGetValues<FormProps>;
}

const ConfirmPassword = ({ register, errors, getValues }: InputProps) => {
  return (
    <dl className={styles.table}>
      <dt>
        <label htmlFor="confirmPassword">パスワード確認</label>
        {errors.confirmPassword?.message && (
          <label htmlFor="confirmPassword" className={styles.error}>
            {errors.confirmPassword.message}
          </label>
        )}
      </dt>
      <dd>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword", {
            validate: (value) =>
              value === getValues("password") || errorMessages.ConfirmPassword.confirm,
          })}
          name="confirmPassword"
        />
      </dd>
    </dl>
  );
};

export default ConfirmPassword;

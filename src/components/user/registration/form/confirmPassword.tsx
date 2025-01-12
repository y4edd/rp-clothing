import { errorMessages } from "@/lib/user/register/message";
import type { FormProps } from "@/types/registration/registration";
import type { FieldErrors, UseFormGetValues, UseFormRegister } from "react-hook-form";
import styles from "./Input.module.css";

interface InputProps {
  register: UseFormRegister<FormProps>;
  errors: FieldErrors<FormProps>;
  getValues: UseFormGetValues<FormProps>;
}

const ComfirmpasswordInput = ({ register, errors, getValues }: InputProps) => {
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
              value === getValues("password") || errorMessages.Comfirmpassword.confirm,
          })}
          name="confirmPassword"
        />
      </dd>
    </dl>
  );
};

export default ComfirmpasswordInput;

import type { FieldErrors } from "react-hook-form";
import styles from "./InputField.module.css";
import type { EditUserProps } from "@/types/user/user";
type Prop = {
  children: React.ReactNode;
  id: string;
  label: string;
  example: string;
  errors: FieldErrors<EditUserProps>;
};
const InputField = ({ children, id, label, example, errors }: Prop) => {
  return (
    <div className={styles.formItem}>
      <div className={styles.label}>
        <label htmlFor={id}>{label} </label>
        {errors.name?.message && (
          <p className={styles.error}>{errors.name.message}</p>
        )}
      </div>
      {children}
      <p className={styles.example}>例）{example}</p>
    </div>
  );
};

export default InputField;

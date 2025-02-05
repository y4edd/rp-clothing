import styles from "./InputField.module.css";
type Prop = {
  children: React.ReactNode;
  id: string;
  label: string;
  example: string;
  errors?: string;
};
const InputField = ({ children, id, label, example, errors }: Prop) => {
  return (
    <div className={styles.formItem}>
      <div className={styles.label}>
        <label htmlFor={id}>{label} </label>
        {errors && (
          <p className={styles.error} data-testid={id}>
            {errors}
          </p>
        )}
      </div>
      {children}
      <p className={styles.example}>例 : {example}</p>
    </div>
  );
};

export default InputField;

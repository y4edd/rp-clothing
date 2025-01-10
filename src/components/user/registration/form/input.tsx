import type { FormProps } from "@/types/registration/registration";
import type { Dispatch, SetStateAction } from "react";
import styles from "./input.module.css";

interface InputProps {
  title: string;
  type: string;
  name: string;
  text: string;
  setFormArray: Dispatch<SetStateAction<FormProps>>;
}

const Input = ({ title, text, type, name, setFormArray }: InputProps) => {
  const formChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormArray((formItem) => ({
      ...formItem,
      [name]: e.target.value,
    }));
  };
  return (
    <dl className={styles.table}>
      <dt>
        <label htmlFor={title}>{title}</label>
      </dt>
      <dd>
        <input type={type} name={name} value={text} id={title} onChange={formChange} />
      </dd>
      <dd>
        {name === "name" ? (
          <p className={styles.attention}>※例：RP太郎</p>
        ) : name === "email" ? (
          <p className={styles.attention}>例：example@clothing.com</p>
        ) : name === "password" ? (
          <p className={styles.attention}>例：password</p>
        ) : null}
      </dd>
    </dl>
  );
};

export default Input;

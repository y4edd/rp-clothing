import styles from "./Icon.module.css";

const Icon = ({ type,children }:any) => {
  return(
    <button type={type} className={styles.icon}>
      {children}
    </button>
  )
};

export default Icon;

import styles from "./Icon.module.css";

const Icon = ({ type,children,onClick }:any) => {
  return(
    <button type={type} className={styles.icon} onClick={onClick}>
      {children}
    </button>
  )
};

export default Icon;

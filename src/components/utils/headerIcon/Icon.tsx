import styles from "./Icon.module.css";

type IconProps = {
  type: "button" | "submit" | "reset";
  onClick?: (e?: React.FormEvent) => void;
  children: React.ReactNode;
};

const Icon = ({ type, children, onClick }: IconProps) => {
  return (
    <button type={type} className={styles.icon} onClick={onClick}>
      {children}
    </button>
  );
};

export default Icon;

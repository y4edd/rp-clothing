import Link from "next/link";
import styles from "./LinkBtn.module.css";

type LinkProps = {
  pathName: string;
  text: string;
  btnColor: "black" | "white" | "red" | "gray";
};

const LinkBtn = ({ pathName, text, btnColor }: LinkProps) => {
  return (
    <Link href={pathName} className={styles[btnColor]}>
      {text}
    </Link>
  );
};

export default LinkBtn;

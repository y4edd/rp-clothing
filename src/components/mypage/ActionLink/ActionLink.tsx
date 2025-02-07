import Link from "next/link";
import IconWithText from "../IconWithText/IconWithText";
import styles from "./ActionLink.module.css";
type Prop = {
  linkPath: string;
  MUIicon: React.ReactNode;
  textArray: string[];
};
const ActionLink = ({ linkPath, MUIicon, textArray }: Prop) => {
  return (
    <Link href={linkPath} className={styles.content}>
      <IconWithText MUIicon={MUIicon} textArray={textArray} />
    </Link>
  );
};

export default ActionLink;

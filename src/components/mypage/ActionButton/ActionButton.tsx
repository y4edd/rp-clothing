import IconWithText from "../IconWithText/IconWithText";
import styles from "./ActionButton.module.css";
type Prop = {
  onClick: () => void;
  MUIicon: React.ReactNode;
  textArray: string[];
};
const ActionButton = ({ onClick, MUIicon, textArray }: Prop) => {
  return (
    <button type="button" onClick={onClick} className={styles.content}>
      <IconWithText MUIicon={MUIicon} textArray={textArray} />
    </button>
  );
};

export default ActionButton;

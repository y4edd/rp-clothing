import styles from "./ActionButton.module.css";
type Prop = {
  MUIicon: React.ReactNode;
  textArray: string[];
};
const ActionButton = ({ MUIicon, textArray }: Prop) => {
  return (
    <div className={styles.content}>
      {MUIicon}
      <div className={styles.contentText}>
        {textArray.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default ActionButton;

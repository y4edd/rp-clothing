import styles from "./IconWithText.module.css";

type Prop = {
  MUIicon: React.ReactNode;
  textArray: string[];
};
const IconWithText = ({ MUIicon, textArray }: Prop) => {
  return (
    <>
      {MUIicon}
      <div className={styles.contentText}>
        {textArray.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </>
  );
};

export default IconWithText;

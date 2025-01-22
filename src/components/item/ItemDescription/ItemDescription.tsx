"use client";
import { useState } from "react";
import styles from "./ItemDescription.module.css";
import Button from "@/components/utils/button/Button";
import btnStyle from "@/components/utils/button/Button.module.css";
type Props = {
  description: string[];
};
const ItemDescription = ({ description }: Props) => {
  const [isSeeMore, setIsSeeMore] = useState(false);
  const CUT_LINE = 7;//初期表示の表示する配列数

  const visibleLines: string[] = isSeeMore
    ? description
    : description.slice(0, CUT_LINE);

  return (
    <div className={styles.container}>
      <p className={styles.description}>商品説明</p>
      <div className={styles.descriptionText}>
        {visibleLines.map((text, index) => (
          <p key={index.toString()}>{text}</p>
        ))}
      </div>
      <div className={styles.btnMore}>
        {!isSeeMore ? (
          <Button
            type="button"
            className={btnStyle.black}
            onClick={() => setIsSeeMore(true)}
            text="More"
          />
        ) : (
          <Button
            type="button"
            className={btnStyle.black}
            onClick={() => setIsSeeMore(false)}
            text="Close"
          />
        )}
      </div>
    </div>
  );
};

export default ItemDescription;

import Button from '@/components/utils/button/Button';
import styles from './SelectQuantity.module.css'
import btnStyles from "@/components/utils/button/Button.module.css";

const SelectQuantity = () => {
  // 数量選択の配列を生成　生成させる大きさを変えるにはlength部分を変える
  const quantities: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className={styles.infoContent}>
      <dt>数量 :</dt>
      <dd>
        <select name="quantity" id="quantity" className={styles.selectQuantity}>
          {quantities.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <Button
          type="button"
          text="カートに入れる"
          className={btnStyles.black}
        />
      </dd>
    </div>
  );
};

export default SelectQuantity;

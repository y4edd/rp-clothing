"use client";
import Button from "@/components/utils/button/Button";
import btnStyles from "@/components/utils/button/Button.module.css";
import styles from "./SelectQuantity.module.css";
import { postCart } from "@/utils/apiFunc";
import { showErrorToast, showToast } from "@/components/utils/toast/toast";
import { useState } from "react";

type SelectQuantityProps = {
  itemCode: string;
}

const SelectQuantity = ({itemCode}: SelectQuantityProps) => {
  // 数量選択の配列を生成　生成させる大きさを変えるにはlength部分を変える
  const quantities: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  // 数量変更時の処理
  const handleQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedQuantity(Number(event.target.value));
  };

  const handleCart = async() => {
    const response = await postCart(itemCode, selectedQuantity);
    const res = await response.json();

    if(!response.ok){
      return showErrorToast(res.message);
    }

    showToast(res.message);
  };

  return (
    <div className={styles.infoContent}>
      <dt>数量 :</dt>
      <dd>
        <select name="quantity" id="quantity" className={styles.selectQuantity}  onChange={handleQuantity}>
          {quantities.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <Button type="button" text="カートに入れる" className={btnStyles.black} onClick={handleCart} />
      </dd>
    </div>
  );
};

export default SelectQuantity;

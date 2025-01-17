import Image from "next/image";
import styles from "./ItemInfo.module.css";
import Button from "@/components/utils/button/Button";
import btnStyles from "@/components/utils/button/Button.module.css"

const ItemInfo = () => {
  // 数量選択の配列を生成　生成させる大きさを変えるにはlength部分を変える
  const quantities: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className={styles.container}>
      <div className={styles.itemImage}>
        <Image
          src={"/sample/sample-item-image.png"}
          alt="アイテム画像"
          width={200}
          height={200}
          className={styles.img}
        />
      </div>
      <ul className={styles.infoList}>
        <li>
          <p>商品名 : アイテム名</p>
        </li>
        <li>
          <p>販売店舗 : 〇〇〇商店</p>
        </li>
        <li>
          <p>値段 : ¥ 2,000 (税込)</p>
        </li>
        <li >
          <label htmlFor="quantity">数量 : </label>
          <select name="quantity" id="quantity" className={styles.selectQuantity}>
            {quantities.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <Button type="button" text="カートに入れる" className={btnStyles.black}/>
        </li>
      </ul>
    </div>
  );
};

export default ItemInfo;

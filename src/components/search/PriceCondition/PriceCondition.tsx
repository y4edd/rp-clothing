import { Action } from "@/types/type";
import styles from "./PriceCondition.module.css";

type Props = {
  minPrice: string;
  maxPrice: string;
  dispatch: (action:Action) => void;
};

const PriceCondition = ({ minPrice, maxPrice, dispatch}: Props) => {
  const minPriceChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_MIN_PRICE", payload: e.target.value })
  };

  const maxPriceChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_MAX_PRICE", payload: e.target.value })
  };

  return (
    <div className={styles.price}>
      <h3 className={styles.title}>値段</h3>
      <div className={styles.priceCondition}>
        <form method="get">
          <input
            type="text"
            id="minPrice"
            className={styles.priceEach}
            value={minPrice}
            onChange={minPriceChange}/>
          ～
          <input
            type="text"
            id="maxPrice"
            className={styles.priceEach}
            value={maxPrice}
            onChange={maxPriceChange}/>円
        </form>
      </div>
    </div>
  );
};

export default PriceCondition;

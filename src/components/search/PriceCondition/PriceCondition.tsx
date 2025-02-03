"use client";

import type { RegisterAction } from "@/types/search/search";
import styles from "./PriceCondition.module.css";

type Props = {
  minPrice: string;
  maxPrice: string;
  dispatch: (action: RegisterAction) => void;
};

const PriceCondition = ({ minPrice, maxPrice, dispatch }: Props) => {
  const minPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_MIN_PRICE", payload: e.target.value });
  };

  const maxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_MAX_PRICE", payload: e.target.value });
  };

  return (
    <div className={styles.price}>
      <h3 className={styles.title}>値段</h3>
      <div className={styles.priceCondition}>
        <input
          type="text"
          id="minPrice"
          name="minPrice"
          data-testid="minPrice"
          className={styles.priceEach}
          value={minPrice}
          onChange={minPriceChange}
        />
        ～
        <input
          type="text"
          id="maxPrice"
          name="maxPrice"
          data-testid="maxPrice"
          className={styles.priceEach}
          value={maxPrice}
          onChange={maxPriceChange}
        />
        円
      </div>
    </div>
  );
};

export default PriceCondition;

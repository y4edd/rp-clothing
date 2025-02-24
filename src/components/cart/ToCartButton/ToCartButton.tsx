"use client";

import Icon from "@/components/utils/headerIcon/Icon";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ToCartButton = () => {
  const toCart = () => {
    console.log("カートボタンがクリックされました");
  };
  return (
    <Icon type="button" onClick={toCart}>
      <ShoppingCartIcon />
    </Icon>
  );
};

export default ToCartButton;

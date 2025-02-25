"use client";

import Icon from "@/components/utils/headerIcon/Icon";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/navigation";

const ToCartButton = () => {
  const router = useRouter();
  const toCart = () => {
    router.push("/cart");
  };
  return (
    <Icon type="button" onClick={toCart}>
      <ShoppingCartIcon />
    </Icon>
  );
};

export default ToCartButton;

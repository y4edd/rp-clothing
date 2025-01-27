"use client";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ActionLink from "../ActionLink/ActionLink";
import styles from "./ShoppingList.module.css";
const ShoppingList = () => {
  return (
    <div className={styles.contentList}>
      <h2 className={styles.title}>ショッピング関連</h2>
      <ActionLink
        linkPath="/"
        textArray={["カート"]}
        MUIicon={<ShoppingCartOutlinedIcon sx={{ fontSize: "70px" }} />}
      />
      <ActionLink
        linkPath="/"
        textArray={["最近チェックした", "アイテム"]}
        MUIicon={<AccessTimeOutlinedIcon sx={{ fontSize: "70px" }} />}
      />
      <ActionLink
        linkPath="/"
        textArray={["購入履歴"]}
        MUIicon={<ShoppingBasketIcon sx={{ fontSize: "70px" }} />}
      />
    </div>
  );
};

export default ShoppingList;

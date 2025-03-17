"use client";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ActionLink from "../ActionLink/ActionLink";
import styles from "./ShoppingList.module.css";

const ICON_SIZE = "70px";

const ShoppingList = () => {
  return (
    <div className={styles.contentList}>
      <h2 className={styles.title}>ショッピング関連</h2>
      <ActionLink
        linkPath="/cart"
        textArray={["カート"]}
        MUIicon={<ShoppingCartOutlinedIcon sx={{ fontSize: ICON_SIZE }} />}
      />
      <ActionLink
        linkPath="/mypage/watched"
        textArray={["最近チェックした", "アイテム"]}
        MUIicon={<AccessTimeOutlinedIcon sx={{ fontSize: ICON_SIZE }} />}
      />
      <ActionLink
        linkPath="/history/purchased"
        textArray={["購入履歴"]}
        MUIicon={<ShoppingBasketIcon sx={{ fontSize: ICON_SIZE }} />}
      />
    </div>
  );
};

export default ShoppingList;

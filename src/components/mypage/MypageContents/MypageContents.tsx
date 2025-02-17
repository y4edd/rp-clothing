import AccountList from "../AccountList/AccountList";
import FavoriteList from "../FavoriteList/FavoriteList";
import ShoppingList from "../ShoppingList/ShoppingList";
import styles from "./MypageContents.module.css";

const MypageContents = () => {
  return (
    <div className={styles.container}>
      <AccountList />
      <ShoppingList />
      <FavoriteList />
    </div>
  );
};

export default MypageContents;

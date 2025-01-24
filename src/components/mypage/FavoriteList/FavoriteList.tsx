import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TuneIcon from "@mui/icons-material/Tune";
import ActionButton from "../ActionButton/ActionButton";
import styles from "./FavoriteList.module.css";

const FavoriteList = () => {
  return (
    <div className={styles.contentList}>
      <h2 className={styles.title}>お気に入り関連</h2>
      <ActionButton
        textArray={["お気に入り", "アイテム・ショップ"]}
        MUIicon={<FavoriteBorderIcon sx={{ fontSize: "70px" }} />}
      />
      <ActionButton
        textArray={["お気に入り条件"]}
        MUIicon={<TuneIcon sx={{ fontSize: "70px" }} />}
      />
    </div>
  );
};

export default FavoriteList;

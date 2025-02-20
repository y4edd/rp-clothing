import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TuneIcon from "@mui/icons-material/Tune";
import ActionLink from "../ActionLink/ActionLink";
import styles from "./FavoriteList.module.css";

const ICON_SIZE = "70px";

const FavoriteList = () => {
  return (
    <div className={styles.contentList}>
      <h2 className={styles.title}>お気に入り関連</h2>
      <ActionLink
        linkPath="/mypage/favorite/item"
        textArray={["お気に入り", "アイテム・ショップ"]}
        MUIicon={<FavoriteBorderIcon sx={{ fontSize: ICON_SIZE }} />}
      />
      <ActionLink
        linkPath="/mypage/search/condition"
        textArray={["お気に入り条件"]}
        MUIicon={<TuneIcon sx={{ fontSize: ICON_SIZE }} />}
      />
    </div>
  );
};

export default FavoriteList;

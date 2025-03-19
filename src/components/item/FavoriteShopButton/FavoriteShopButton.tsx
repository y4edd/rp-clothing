"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import styles from "./FavoriteShopButton.module.css";
import { deleteFavItem, postFavItem } from "@/utils/apiFunc";

type FavoriteShopButton = {
  userId: string;
  itemCode: string;
}

const FavoriteShopButton = ({userId, itemCode}:FavoriteShopButton) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = async() => {
    // // 登録済みなら削除し、未登録なら登録する非同期を走らせる
    // let response;
    // if(isFavorite) {
    //   // 削除
    //   response = await deleteFavItem(userId, itemCode);
    // } else {
    //   // 登録
    //   response = await postFavItem(userId, itemCode);
    // }
  };
  return (
    <button type="button" onClick={handleFavorite} className={styles.button}>
      {isFavorite ? (
        <FavoriteIcon sx={{ fontSize: "25px" }} />
      ) : (
        <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
      )}
    </button>
  );
};

export default FavoriteShopButton;

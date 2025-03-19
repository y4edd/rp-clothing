"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import styles from "./FavoriteShopButton.module.css";
import { deleteFavShop, postFavShop } from "@/utils/apiFunc";
import { showErrorToast, showToast } from "@/components/utils/toast/toast";

type FavoriteShopButton = {
  userId: string;
  shopCode: string;
}

const FavoriteShopButton = ({userId, shopCode}:FavoriteShopButton) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = async() => {
    // 登録済みなら削除し、未登録なら登録する非同期を走らせる
    let response;
    if(isFavorite) {
      response = await deleteFavShop(userId, shopCode);
    } else {
      response = await postFavShop(userId, shopCode);
    }
    const res = await response.json();
    if(!response.ok) {
      showErrorToast(res.message);
      return;
    }
    showToast(res.message);
    // いずれの非同期処理をするにしても、成功した時のみ表示を切り替える
    setIsFavorite(prev => !prev);
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

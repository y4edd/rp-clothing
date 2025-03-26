"use client";
import { showErrorToast, showToast } from "@/components/utils/toast/toast";
import { deleteFavItem, fetchUserId, postFavItem } from "@/utils/apiFunc";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import styles from "./FavoriteButton.module.css";

type FavoriteButtonProps = {
  itemCode: string;
};

const FavoriteButton = ({ itemCode }: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchFunction = async () => {
      const currentUserId = await fetchUserId();
      if (!currentUserId.userId) {
        return;
      }
      setUserId(currentUserId.userId);
    };
    fetchFunction();
  }, []);

  const handleFavorite = async () => {
    // 登録済みなら削除し、未登録なら登録する非同期を走らせる
    let response: Response;
    if (isFavorite) {
      response = await deleteFavItem(userId, itemCode);
    } else {
      response = await postFavItem(userId, itemCode);
    }
    const res = await response.json();
    if (!response.ok) {
      showErrorToast(res.message);
      return;
    }
    showToast(res.message);
    // いずれの非同期処理をするにしても、成功した時のみ表示を切り替える
    setIsFavorite((prev) => !prev);
  };
  return (
    <button type="button" onClick={handleFavorite} className={styles.favoriteIcon}>
      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </button>
  );
};

export default FavoriteButton;

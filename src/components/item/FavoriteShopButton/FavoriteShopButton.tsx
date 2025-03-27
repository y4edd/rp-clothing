"use client";
import { showErrorToast, showToast } from "@/components/utils/toast/toast";
import { deleteFavShop, fetchFavShop, postFavShop } from "@/utils/apiFunc";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import styles from "./FavoriteShopButton.module.css";

type FavoriteShopButton = {
  userId: string;
  shopCode: string;
  shopName: string;
  shopUrl: string;
};

const FavoriteShopButton = ({ userId, shopCode, shopName, shopUrl }: FavoriteShopButton) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies:
  useEffect(() => {
    const fetchFunction = async () => {
      // お気に入りに登録済みかどうかを確認する非同期を走らせる
      const confirmFav = await fetchFavShop(shopCode);
      if (!confirmFav) {
        setIsFavorite(false);
        return;
      }
      // trueなら、そのまま「isFavorite」がtrueになるようにセット
      setIsFavorite(true);
    };
    fetchFunction();
  }, [userId, shopCode]);

  const handleFavorite = async () => {
    // 登録済みなら削除し、未登録なら登録する非同期を走らせる
    let response: Response;
    if (isFavorite) {
      response = await deleteFavShop(userId, shopCode);
    } else {
      response = await postFavShop(userId, shopCode, shopName, shopUrl);
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

"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import styles from "./FavoriteShopButton.module.css";

const FavoriteShopButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
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

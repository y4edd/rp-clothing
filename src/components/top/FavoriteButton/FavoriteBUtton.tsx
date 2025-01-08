"use client";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./FavoriteButton.module.css";

const FavoriteBUtton = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <button onClick={handleFavorite} className={styles.favoriteIcon}>
      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </button>
  );
};

export default FavoriteBUtton;

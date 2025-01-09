"use client";

import Icon from "@/components/utils/headerIcon/Icon";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ToFavoriteButton = () => {
  const toFavorite = () => {
    console.log("お気に入りがクリックされました");
  };

  return (
    <Icon type="button" onClick={toFavorite}>
      <FavoriteBorderIcon />
    </Icon>
  );
};

export default ToFavoriteButton;

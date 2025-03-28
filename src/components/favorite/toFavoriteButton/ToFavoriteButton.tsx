"use client";

import Icon from "@/components/utils/headerIcon/Icon";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useRouter } from "next/navigation";

const ToFavoriteButton = () => {
  const router = useRouter();
  const toFavorite = () => {
    router.push("/mypage/favorite/item");
  };

  return (
    <Icon type="button" onClick={toFavorite}>
      <FavoriteBorderIcon />
    </Icon>
  );
};

export default ToFavoriteButton;

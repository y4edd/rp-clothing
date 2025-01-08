"use client";

import Icon from "@/components/utils/headerIcon/Icon";
import SearchIcon from "@mui/icons-material/Search";

const WordSearchButton = () => {
  const search = () => {
    console.log("search");
  };

  return (
    <Icon type="submit" onClick={search}>
      <SearchIcon />
    </Icon>
  );
};

export default WordSearchButton;

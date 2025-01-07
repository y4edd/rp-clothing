"use client";
import Icon from "@/components/utils/headerIcon/Icon";
import SearchIcon from "@mui/icons-material/Search";

const SearchButton = ({ id }: Readonly<{ id: string }>) => {
  // 検索モーダルの展開
  const filter = () => {
  };
  return (
    <>
      <Icon type="button" onClick={filter}>
        <SearchIcon />
      </Icon>
      <div>{id}</div>
    </>
  )
};

export default SearchButton;

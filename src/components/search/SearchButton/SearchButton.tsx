"use client";
import Icon from "@/components/utils/headerIcon/Icon";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";

const SearchButton = () => {
  const router = useRouter();

  const filter = () => {
    router.push("/search", { scroll: false });
    console.log("検索ボタンがクリックされました");
  };
  return (
    <>
      <Icon type="button" onClick={filter}>
        <SearchIcon />
      </Icon>
    </>
  );
};

export default SearchButton;

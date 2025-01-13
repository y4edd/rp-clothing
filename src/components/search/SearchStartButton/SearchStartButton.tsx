"use client";
import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css";

type Props = {
  onSearch: () => void;
};

const SearchStartButton = ({onSearch}:Props) => {
  return <Button text={"検索"} onClick={onSearch} className={buttonStyles.black} />;
};

export default SearchStartButton;

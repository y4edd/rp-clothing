"use client";
import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css";

type Props = {
  onSearch: () => void;
};

const RegisterButton = ({ onSearch }:Props) => {
  return <Button text={"検索条件を登録"} onClick={onSearch} className={buttonStyles.black} />;
}

export default RegisterButton
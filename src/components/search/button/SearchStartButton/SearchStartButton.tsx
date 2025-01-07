import Button from "@/components/utils/button/Button";
import buttonStyles from "@/components/utils/button/Button.module.css";

const SearchStartButton = () => {
  const  toSearch = () => {
    // FIXME: 入力された各検索条件を取得し、検索する非同期処理を実装する
    console.log("検索開始");
  };

  return <Button text={"検索"} onClick={toSearch} className={buttonStyles.black} />
}

export default SearchStartButton;

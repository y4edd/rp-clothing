import FavCondition from "../FavCondition/FavCondition";

const FavConditions = () => {
  // MEMO: 非同期処理でお気に入りの検索条件を受け取り、渡してmapで表示させる
  return (
    <>
      <FavCondition
        conditionName={"ビンテージ市場"}
        minPrice="0"
        maxPrice="4000"
        selectedCategory="Tシャツ"
        keyWord="三陽商会"
      />
      <FavCondition
        conditionName={"軍パン"}
        minPrice="4000"
        maxPrice="16000"
        selectedCategory="ズボン・パンツ"
        keyWord="80s"
      />
      <FavCondition
        conditionName={"プチプラ（出勤）"}
        minPrice="0"
        maxPrice="6000"
        selectedCategory="ジャケット・セットアップ"
        keyWord="オールシーズン"
      />
    </>
  );
};

export default FavConditions;

// 検索モーダル
"use client";

import Modal from "@/app/Modal";
import CategoryCondition from "@/components/search/CategoryCondition/CategoryCondition";
import FavConditionEdit from "@/components/search/FavConditionEdit/FavConditionEdit";
import FavConditions from "@/components/search/FavConditions/FavConditions";
import KeyWordCondition from "@/components/search/KeyWordCondition/KeyWordCondition";
import PriceCondition from "@/components/search/PriceCondition/PriceCondition";
import SearchStartButton from "@/components/search/SearchStartButton/SearchStartButton";

const searchPage = () => {
  return (
    <Modal>
      <h2>検索条件</h2>
      <div>
        お気に入り条件
        <FavConditions />
        <FavConditionEdit />
      </div>
      <div>
        値段
        <PriceCondition />
      </div>
      <div>
        カテゴリ
        <CategoryCondition />
      </div>
      <div>
        キーワード
        <KeyWordCondition />
      </div>
      <SearchStartButton />
    </Modal>
  );
}

export default searchPage;

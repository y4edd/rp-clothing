// 検索モーダル
"use client";

import Modal from "@/app/Modal";
import CategoryCondition from "@/components/search/CategoryCondition/CategoryCondition";
import FavConditions from "@/components/search/FavConditions/FavConditions";
import KeyWordCondition from "@/components/search/KeyWordCondition/KeyWordCondition";
import PriceCondition from "@/components/search/PriceCondition/PriceCondition";
import SearchStartButton from "@/components/search/button/SearchStartButton/SearchStartButton";

const searchPage = () => {
  return (
    <Modal>
      <h2>検索条件</h2>
        <FavConditions />
        <PriceCondition />
        <CategoryCondition />
        <KeyWordCondition />
        <SearchStartButton />
    </Modal>
  );
}

export default searchPage;

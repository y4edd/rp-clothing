import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import React from "react";

const ItemDetailPage = () => {
  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/item", title: "商品詳細" },
        ]}
      />
      <PageTitle title={"商品詳細"} />
      <div>
        動的ルートで商品詳細は作成するので詳細を取得するAPIを作成時にitem直下のpage.tsxファイルを
        [id]直下に移動します。
      </div>
    </>
  );
};

export default ItemDetailPage;

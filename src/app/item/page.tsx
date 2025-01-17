import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import LookHistory from "@/components/top/LookHistoryItems/LookHistory";
import ItemDetail from "@/components/item/ItemDetail";

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
      <ItemDetail/>
      <LookHistory />
    </>
  );
};

export default ItemDetailPage;

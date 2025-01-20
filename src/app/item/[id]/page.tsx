import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import ItemDetail from "@/components/item/ItemDetail";
import LookHistory from "@/components/top/LookHistoryItems/LookHistory";

type ItemPageProp = {
  params: Promise<{ id: string }>;
};
const ItemDetailPage = async ({ params }: ItemPageProp) => {
  const itemCode = (await params).id;
  console.log(itemCode);

  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/item", title: "商品詳細" },
        ]}
      />
      <PageTitle title={"商品詳細"} />
      <ItemDetail itemCode={itemCode} />
      <LookHistory />
    </>
  );
};

export default ItemDetailPage;

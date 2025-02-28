import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import ItemDetail from "@/components/item/ItemDetail";
import LookHistory from "@/components/top/LookHistoryItems/LookHistory";
import { checkAuth } from "@/utils/chechAuth";

type Prop = {
  params: { id: string };
  history: { itemCode: string; userId: string };
};

const ItemDetailPage = async ({ params }: Prop) => {
  const itemCode = params.id;
  const userId = await checkAuth();
  const history = { itemCode, userId };
  // const itemCode = (params).id;
  // const userId = await checkAuth();
  // const itemCodeObj = { itemCode: itemCode };
  // const userIdObj = { userId: userId };
  // const history = { ...itemCodeObj, ...userIdObj };

  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: `/item/${itemCode}`, title: "商品詳細" },
        ]}
      />
      <PageTitle title={"商品詳細"} />
      <ItemDetail itemCode={itemCode} history={history} />
      <LookHistory />
    </>
  );
};

export default ItemDetailPage;

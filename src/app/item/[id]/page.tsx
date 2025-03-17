import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import ItemDetail from "@/components/item/ItemDetail";
import LookHistory from "@/components/top/LookHistoryItems/LookHistory";
import { checkAuth } from "@/utils/checkAuth";

type Props = {
  params: Promise<{ id: string }>;
};
const ItemDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  // 明示された型にそろえる
  const itemCode = id;
  const userId = await checkAuth();
  const history = { itemCode, userId };

  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: `/item/${id}`, title: "商品詳細" },
        ]}
      />
      <PageTitle title={"商品詳細"} />
      <ItemDetail history={history} />
      <LookHistory />
    </>
  );
};

export default ItemDetailPage;

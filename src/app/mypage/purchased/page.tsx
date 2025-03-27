import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import PurchasedItem from "@/components/mypage/PurchasedItem/PurchasedItem";
import UnauthorizedAccess from "@/components/user/UnauthorizedAccess/UnauthorizedAccess";
import { getPurchasedItems } from "@/utils/apiFunc";
import { checkAuth } from "@/utils/checkAuth";
import styles from "./page.module.css";

type PurchasedItemObj = {
  itemCode: string;
  itemName: string;
  itemPrice: number;
  itemImage: string;
  itemShop: string;
  createdAt: string;
  quantity: number;
};

const Purchased = async () => {
  const token = await checkAuth();
  if (!token) {
    return <UnauthorizedAccess />;
  }
  const purchasedItems = await getPurchasedItems(token);

  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/mypage", title: "マイページ" },
          { link: "/mypage/purchased", title: "購入履歴" },
        ]}
      />
      <PageTitle title={"購入履歴"} />
      <div className={styles.container}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr className={styles.conditionTitleContainer}>
              <td className={styles.itemInfo}>商品情報</td>
              <td className={styles.itemShop}>販売店舗</td>
              <td className={styles.quantity}>決済日</td>
            </tr>
          </thead>
          <tbody>
            {purchasedItems.purchasedHistories.map((purchasedHistory: PurchasedItemObj) => (
              <PurchasedItem key={purchasedHistory.itemCode} purchasedHistory={purchasedHistory} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Purchased;

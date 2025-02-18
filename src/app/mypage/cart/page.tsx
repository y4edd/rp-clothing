import CartItem from "@/components/cart/CartItem/CartItem";
import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import styles from "./page.module.css";

const Cart = () => {
  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/mypage", title: "マイページ" },
          { link: "/mypage/cart", title: "ショッピングカート" },
        ]}
      />
      <PageTitle title="ショッピングカート" />
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.conditionTitleContainer}>
              <td className={styles.listTitle}>商品情報</td>
              <td className={styles.listTitle}>販売店舗</td>
              <td className={styles.listTitle}>数量</td>
              <td className={styles.listTitle}>削除</td>
            </tr>
          </thead>
          <tbody>
            <CartItem />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;

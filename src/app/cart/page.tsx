import CartItem from "@/components/cart/CartItem/CartItem";
import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import styles from "./page.module.css";
import { getCartItems } from "@/utils/apiFunc";
import { checkAuth } from "@/utils/chechAuth";
import NoCartItems from "@/components/cart/NoCartItems/NoCartItems";
import TotalPrice from "@/components/cart/TotalPrice/TotalPrice";

const Cart = async () => {
  try {
    const userId = await checkAuth();
    const cartItems = await getCartItems(userId);

    // カートが空の場合
    if (!cartItems || !cartItems.items.length) {
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
          <NoCartItems />
        </>
      );
    }

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
                <td className={styles.itemInfo}>商品情報</td>
                <td className={styles.itemShop}>販売店舗</td>
                <td className={styles.quantity}>数量</td>
                <td className={styles.delete}>削除</td>
              </tr>
            </thead>
            <tbody>
              {cartItems.items.map((item: any) => (
                <CartItem key={item.itemCode} item={item} userId={userId} />
              ))}
            </tbody>
          </table>
          <TotalPrice cartItemArr={cartItems.items} />
        </div>
      </>
    );
  } catch (error) {
    console.error("カートの取得中にエラーが発生しました:", error);
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
        <p style={{ textAlign: "center", color: "red" }}>エラーが発生しました。再度お試しください。</p>
      </>
    );
  }
};

export default Cart;

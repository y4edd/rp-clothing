import CartItem from "@/components/cart/CartItem/CartItem";
import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import styles from "./page.module.css";
import { getCartItems } from "@/utils/apiFunc";
import { checkAuth } from "@/utils/chechAuth";

const Cart = async() => {
  const userId = await checkAuth();
  const cartItems = await getCartItems(userId);
  console.log(cartItems.items);
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
            {cartItems.items.map((item: any) => {
              return (
                <CartItem
                  key={item.itemCode}
                  item={item}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
import CartItem from "@/components/cart/CartItem/CartItem";
import NoCartItems from "@/components/cart/NoCartItems/NoCartItems";
import TotalPrice from "@/components/cart/TotalPrice/TotalPrice";
import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import { getCartItems, getIsBirthday, getSessionCartItems } from "@/utils/apiFunc";
import { checkAuth } from "@/utils/checkAuth";
import { cookies } from "next/headers";
import styles from "./page.module.css";

type CartItemObj = {
  itemName: string;
  itemCode: string;
  itemPrice: number;
  itemImage: string;
  shopCode: string;
  shopName: string;
  shopUrl: string;
  quantity: number;
};

type CartItems = {
  items: CartItemObj[];
  totalAmount: number;
};

const Cart = async () => {
  let cartItems: CartItems;
  try {
    const userId = await checkAuth();
    if (userId) {
      cartItems = await getCartItems(userId);
    } else {
      const cookieStore = await cookies();
      // 根本的な設計ミス。
      const token = cookieStore.get("sessionId");
      if (!token) {
        return;
      }
      cartItems = await getSessionCartItems(token.value);
    }

    const isBirthdayObj = await getIsBirthday(userId);

    const isBirthday = isBirthdayObj.isBirthday;

    const totalPrice = cartItems.totalAmount;

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
            { link: "/cart", title: "ショッピングカート" },
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
              {cartItems.items.map((item: CartItemObj) => (
                <CartItem key={item.itemCode} item={item} userId={userId} />
              ))}
            </tbody>
          </table>
          <TotalPrice isBirthday={isBirthday} totalPrice={totalPrice} />
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
        <p style={{ textAlign: "center", color: "red" }}>
          エラーが発生しました。再度お試しください。
        </p>
      </>
    );
  }
};

export default Cart;

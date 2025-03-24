import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Purchased = () => {
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
              {/* <td className={styles.delete}>削除</td> */}
            </tr>
          </thead>
          <tbody>
            <tr className={styles.cartItem}>
              <td className={styles.itemInfoCart}>
                <figure className={styles.itemImage}>
                  <Image
                    src="/sample/sample-item-image.png"
                    alt="アイテム画像"
                    width={200}
                    height={200}
                    className={styles.itemImage}
                  />
                </figure>
                <dl className={styles.itemInfoDetail}>
                  <dt className={styles.itemName}>商品名：</dt>
                  <dt className={styles.itemPrice}>価格：</dt>
                  <dt className={styles.itemPrice}>数量：</dt>
                  {/* <dd>{item.itemPrice.toLocaleString()}円</dd> */}
                </dl>
              </td>
              <td className={styles.itemShop}>
                {/* <Link href={item.shopUrl}>{item.shopName}</Link> */}
                <Link href="/">ショップ名</Link>
              </td>
              <td className={styles.itemShop}>
                <p>2024/10/01</p>
              </td>
            </tr>
            {/* {cartItems.items.map((item: CartItemObj) => (
                <CartItem key={item.itemCode} item={item} userId={userId} />
              ))} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Purchased;

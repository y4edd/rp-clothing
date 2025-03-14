import BreadList from "@/components/frame/breadList/BreadList"
import PageTitle from "@/components/frame/pageTitle/PageTitle"
import styles from "./page.module.css";
import LinkBtn from "@/components/utils/link/LinkBtn";

const Success = async() => {
  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/cart", title: "ショッピングカート" },
          { link: "/cart/payment", title: "お支払い" },
        ]}
      />
      <PageTitle title="お支払い" />
      <div className={styles.container}>
        <p className={styles.succeed}>購入が完了しました！</p>
        <div className={styles.buttonContainer}>
          <LinkBtn pathName="/" text="トップページへ" btnColor="white"/>
          <LinkBtn pathName="/mypage/purchased" text="購入履歴へ" btnColor="black"/>
        </div>
      </div>
    </>
  )
}

export default Success;
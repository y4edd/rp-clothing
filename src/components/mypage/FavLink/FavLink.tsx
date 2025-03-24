import { headers } from "next/headers"
import styles from "./FavLink.module.css"
import Link from "next/link"

const FavLink = async() => {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  // 表示制御のためにURLを取得した。処理はフロントの役割
  const url = pathname.split("/").pop();

  return (
    <div className={styles.parentContainer}>
      <div className={styles.linkButtonsContainer}>
        <Link href="/mypage/favorite/item" className={ url === "item" ? styles.nowLink : ""}>アイテム</Link>
        <Link href="/mypage/favorite/shop" className={ url === "shop" ? styles.nowLink : ""}>ショップ</Link>
      </div>
    </div>
  )
}

export default FavLink
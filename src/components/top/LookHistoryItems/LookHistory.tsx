import WatchedContainer from "@/components/mypage/WatchedContainer/WatchedContainer";
import { checkAuth } from "@/utils/checkAuth";
import { fetchWatched } from "@/utils/fetchWatched";
import Link from "next/link";
import styles from "./LookHistory.module.css";

const LookHistory = async () => {
  const userId = await checkAuth();
  const data = await fetchWatched(userId);

  return (
    <div className={styles.container}>
      <h2 className={styles.contentTitle}>最近チェックしたアイテム</h2>
      <div className={styles.gridItemsHistory}>
        <WatchedContainer histories={data?.histories || []} className="slider" />
      </div>

      {!userId && (
        <div className={styles.onlyMember}>
          <div className={styles.onlyTitle}>
            <h3>会員限定機能です</h3>
          </div>
          <p>取扱商品多数！まずは会員登録！</p>
          <Link href="/user/register">
            <button type="button" className={styles.onlyButton}>
              新規会員登録
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LookHistory;

import Button from "@/components/utils/button/Button";
import styles from "./FavConditions.module.css";
import buttonStyles from "@/components/utils/button/Button.module.css";
import { useRouter } from "next/navigation"; 

const FavConditions = () => {
  const router = useRouter();

  const toMyPage = () => {
    router.push("/mypage");
  };

  const toSearch = () => {
    // FIXME:非同期で、お気に入り条件での検索を実行する処理を実装
    console.log("検索条件で検索を実行");
  };

  return (
    <>
      <h3 className={styles.title}>お気に入り条件</h3>
      <div className={styles.favConditionsContent}>
        <div className={styles.favConditions}>
          {/* FIXME:非同期で、お気に入り条件の取得、UI表示を行う処理を実装 */}
          <Button text={"条件1"} onClick={toSearch} className={buttonStyles.gray}/>
          <Button text={"条件2"} onClick={toSearch} className={buttonStyles.gray}/>
          <Button text={"条件3"} onClick={toSearch} className={buttonStyles.gray}/>
          <Button text={"条件4"} onClick={toSearch} className={buttonStyles.gray}/>
        </div>
        <div className={styles.editButton}>
          <Button text={"お気に入り条件の編集"} onClick={toMyPage} className={buttonStyles.black}/>
        </div>
      </div>
            {/* 何も登録されていない場合 */}
      {/* <p>
        お気に入り条件は登録されていません<br />
        マイページから、お気に入り条件を登録しましょう！
      </p>
      <Button text={"マイページ"} onClick={toMyPage} className={buttonStyles.black}/> */}
    </>
  )
}

export default FavConditions;

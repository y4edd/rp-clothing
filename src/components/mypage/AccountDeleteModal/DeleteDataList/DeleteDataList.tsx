import styles from "./DeleteDataList.module.css";

const DeleteDataList = () => {
  return (
    <ul className={styles.list}>
      <li>購入履歴</li>
      <li>カート情報</li>
      <li>お気に入り情報</li>
      <li>ユーザー情報</li>
      <li>閲覧履歴</li>
    </ul>
  );
};

export default DeleteDataList;

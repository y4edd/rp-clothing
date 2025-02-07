import styles from "./UserDetail.module.css";
import UserInfo from "./UserInfo/UserInfo";
import UserButtons from "./UserLinkButtons/UserLinkButtons";
const UserDetail = () => {
  return (
    <div className={styles.container}>
      <UserInfo />
      <UserButtons />
    </div>
  );
};

export default UserDetail;

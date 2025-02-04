import LinkBtn from "@/components/utils/link/LinkBtn";
import styles from "./UserDetail.module.css";
import UserInfo from "./UserInfo/UserInfo";
import UserButtons from "./UserButtons/UserButtons";
const UserDetail = () => {
  return (
    <div className={styles.container}>
      <UserInfo />
      <UserButtons />
    </div>
  );
};

export default UserDetail;

import WatchedList from "../WatchedList.tsx/WatchedList";
import { History } from "@/types/history/history";
import styles from "./WatchedContainer.module.css";

type Props = {
  title: string;
  histories: History[];
};
const WatchedContainer = ({title,histories}:Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.contentTitle}>{title}</h2>
      <WatchedList histories={histories}/>
    </div>
  )
}

export default WatchedContainer
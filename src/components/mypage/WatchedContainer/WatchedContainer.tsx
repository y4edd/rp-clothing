import type { History } from "@/types/history/history";
import WatchedList from "../WatchedList/WatchedList";
import styles from "./WatchedContainer.module.css";

type Props = {
  histories: History[];
};
const WatchedContainer = ({ histories }: Props) => {
  return (
    <div className={styles.container}>
      <WatchedList histories={histories} />
    </div>
  );
};

export default WatchedContainer;

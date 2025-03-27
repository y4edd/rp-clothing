import type { History } from "@/types/history/history";
import WatchedList from "../WatchedList/WatchedList";

type Props = {
  histories: History[];
  className?: string;
};
const WatchedContainer = ({ histories, className }: Props) => {
  return <WatchedList histories={histories} className={className} />;
};

export default WatchedContainer;

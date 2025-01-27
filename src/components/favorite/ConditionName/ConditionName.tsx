import type { RegisterAction } from "@/types/search/search";
import styles from "./ConditionName.module.css";

type ConditionNameProps = {
  conditionName: string;
  dispatch: (action: RegisterAction) => void;
};

const ConditionName = ({ conditionName, dispatch }: ConditionNameProps) => {
  const handleConditionName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_CONDITION_NAME", payload: e.target.value });
  };
  return (
    <div className={styles.conditionName}>
      <h3 className={styles.title}>条件名（必須入力）</h3>
      <input
        type="text"
        id="conditionName"
        data-testid="conditionName"
        name="conditionName"
        className={styles.conditionNameInput}
        onChange={handleConditionName}
        value={conditionName}
      />
    </div>
  );
};

export default ConditionName;

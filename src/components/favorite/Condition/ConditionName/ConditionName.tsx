import type { RegisterAction } from "@/types/search/search";
import styles from "./ConditionName.module.css";

type ConditionNameProps = {
  dispatch: (action: RegisterAction) => void;
};

const ConditionName = ({ dispatch }: ConditionNameProps) => {
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => dispatch({ type: "SET_CONDITION_NAME", payload: e.target.value })
  return (
    <div className={styles.conditionName}>
      <h3 className={styles.title}>条件名（必須入力）</h3>
      <input
        type="text"
        id="conditionName"
        data-testid="conditionName"
        className={styles.conditionNameInput}
        onChange={handleChange}
      />
    </div>
  );
};

export default ConditionName;

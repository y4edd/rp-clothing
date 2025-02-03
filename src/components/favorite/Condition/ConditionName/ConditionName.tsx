import type { RegisterAction } from "@/types/search/search";
import styles from "./ConditionName.module.css";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormProps } from "@/types/user/user";

type ConditionNameProps = {
  dispatch: (action: RegisterAction) => void;
  register: UseFormRegister<FormProps>;
};

const ConditionName = ({register, dispatch }: ConditionNameProps) => {
  return (
    <div className={styles.conditionName}>
      <h3 className={styles.title}>条件名（必須入力）</h3>
      <input
        type="text"
        id="conditionName"
        data-testid="conditionName"
        className={styles.conditionNameInput}
        {...register("conditionName", {
          onChange: (e) => dispatch({ type: "SET_CONDITION_NAME", payload: e.target.value })
        })}
      />
    </div>
  );
};

export default ConditionName;

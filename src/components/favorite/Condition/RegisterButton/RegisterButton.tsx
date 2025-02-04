import Button from "@/components/utils/button/Button";
import { editCondition, postCondition } from "@/utils/apiFunc";
import buttonStyles from "@/components/utils/button/Button.module.css";
import { FavConditionProps } from "@/types/search/search";

type RegisterButtonProps = {
  buttonType: "register" | "edit";
  state: FavConditionProps;
  validate: () => boolean;
  closeModal: () => void;
};

const RegisterButton: React.FC<RegisterButtonProps> = ({ buttonType, state, validate, closeModal }) => {

  // ボタン押下時の処理
  const handleClick = async () => {
    if (!validate()) return;

    try {
      if (buttonType === "register") {
        await postCondition(state);
      } else {
        await editCondition(state);
      }
      closeModal();
    } catch(err) {
      console.error(err);
    }
  };

  return (<Button text={"検索条件を登録"} onClick={handleClick} className={buttonStyles.black} />)
};

export default RegisterButton;
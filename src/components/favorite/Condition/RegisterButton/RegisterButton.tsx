import Button from "@/components/utils/button/Button";
import { editCondition, postCondition } from "@/utils/apiFunc";
import buttonStyles from "@/components/utils/button/Button.module.css";
import { FavConditionProps } from "@/types/search/search";
import { useRouter } from "next/navigation";

type RegisterButtonProps = {
  buttonType: "register" | "edit";
  state: FavConditionProps;
  validate: () => boolean;
  closeModal: () => void;
  searchConditionId: number;
};

const RegisterButton: React.FC<RegisterButtonProps> = ({
  buttonType,
  state,
  validate,
  closeModal,
  searchConditionId,
}) => {

  const router = useRouter();
  // ボタン押下時の処理
  const handleClick = async () => {
    if (!validate()) return;
    try {
      if (buttonType === "register") {
        await postCondition(state);
       router.push("/mypage/searchCondition");
      } else {
        await editCondition(state,searchConditionId);
      }
      closeModal();
    } catch (err) {
      console.error(err);
    }
  };

  return <Button text={"検索条件を登録"} onClick={handleClick} className={buttonStyles.black} />;
};

export default RegisterButton;

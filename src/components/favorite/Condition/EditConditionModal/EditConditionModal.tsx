"use client";

import { type ModalProps } from "@/types/modal";
import ConditionModal from "../ConditionModal/ConditionModal";

const EditConditionModal: React.FC<ModalProps> = ({ closeModal }) => {
  return <ConditionModal closeModal={closeModal} modalTitle="お気に入り条件編集"  />;
}

export default EditConditionModal;
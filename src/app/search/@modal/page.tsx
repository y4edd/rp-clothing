// 検索モーダル
"use client";

import Modal from "@/app/Modal";
import { useRouter } from "next/navigation";

const searchPage = () => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <Modal>
      <div>検索条件</div>
    </Modal>
  );
}

export default searchPage;

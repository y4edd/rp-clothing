// MEMO: 表示されるモーダルコンポーネントのlayout
import Link from "next/link";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Link href="/">Close modal</Link>
      <div>{children}</div>
    </>
  );
};

export default Modal;

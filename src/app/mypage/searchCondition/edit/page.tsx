import EditModal from "@/components/favorite/Condition/EditModal/EditModal";
import { Suspense } from "react";

const Page = () => {
  return (
    // useclientを宣言していても、Next.jsはpage.tsxをSSRで事前レンダリングしようとするため、Suspenseで囲む
    <Suspense fallback={<div>Loading...</div>}>
      <EditModal />
    </Suspense>
  );
};

export default Page;

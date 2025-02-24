import DeleteModal from "@/components/favorite/Condition/DeleteModal/DeleteModal";
import { Suspense } from "react";

const Page = () => {
  return (
    // useclientを宣言していても、Next.jsはpage.tsxをSSRで事前レンダリングしようとするため、Suspenseで囲む
    <Suspense fallback={<div>Loading...</div>}>
      <DeleteModal />
    </Suspense>
  );
};

export default Page;

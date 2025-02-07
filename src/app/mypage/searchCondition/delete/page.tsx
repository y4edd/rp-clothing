import { Suspense } from "react";
import DeleteModal from "@/components/favorite/Condition/DeleteModal/DeleteModal";

const Page = () => {
  return (
    // useclientを宣言していても、Next.jsはpage.tsxをSSRで事前レンダリングしようとするため、Suspenseで囲む
    <Suspense fallback={<div>Loading...</div>}>
      <DeleteModal />
    </Suspense>
  );
}

export default Page;
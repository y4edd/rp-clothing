import { Suspense } from "react";
import RegisterModal from "@/components/favorite/Condition/RegisterModal/RegisterModal";

const Page = () => {
  return (
    // useclientを宣言していても、Next.jsはpage.tsxをSSRで事前レンダリングしようとするため、Suspenseで囲む
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterModal />
    </Suspense>
  );
}

export default Page;
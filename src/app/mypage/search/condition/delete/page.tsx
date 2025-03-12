import DeleteModal from "@/components/favorite/Condition/DeleteModal/DeleteModal";
import { checkAuth } from "@/utils/checkAuth";
import { Suspense } from "react";

const Page = async () => {
  const userId = await checkAuth();
  return (
    // useclientを宣言していても、Next.jsはpage.tsxをSSRで事前レンダリングしようとするため、Suspenseで囲む
    <Suspense fallback={<div>Loading...</div>}>
      <DeleteModal userId={userId} />
    </Suspense>
  );
};

export default Page;

import EditModal from "@/components/favorite/Condition/EditModal/EditModal";
import { checkAuth } from "@/utils/chechAuth";
import { Suspense } from "react";

const Page = async () => {
  const userId = await checkAuth();
  return (
    // useclientを宣言していても、Next.jsはpage.tsxをSSRで事前レンダリングしようとするため、Suspenseで囲む
    <Suspense fallback={<div>Loading...</div>}>
      <EditModal userId={userId} />
    </Suspense>
  );
};

export default Page;

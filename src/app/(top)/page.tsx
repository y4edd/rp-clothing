import LookHistory from "@/components/top/LookHistoryItems/LookHistory";
import NewItems from "@/components/top/NewItems/NewItems";
import { Suspense } from "react";

const TopPage = async () => {
  return (
    <>
      <Suspense>
        <NewItems />
      </Suspense>
      <LookHistory />
    </>
  );
};

export default TopPage;

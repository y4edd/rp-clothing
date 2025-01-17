import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import LookHistory from "@/components/top/LookHistoryItems/LookHistory";
import NewItems from "@/components/top/NewItems/NewItems";
import { Suspense } from "react";

const TopPage = async () => {
  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
        ]}
      />
      <PageTitle title={"トップ"} />

      <Suspense>
        <NewItems />
      </Suspense>
      <LookHistory />
    </>
  );
};

export default TopPage;

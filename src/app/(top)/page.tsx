import LookHistory from "@/components/top/LookHistoryItems/LookHistory";
import NewItems from "@/components/top/NewItems/NewItems";
import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";

const TopPage = () => {
  return (
    <>
      <BreadList bread={[{ link: "/", title: "トップ" }]} />
      <PageTitle title={"トップ"} />
      <NewItems />
      <LookHistory />
    </>
  );
};

export default TopPage;

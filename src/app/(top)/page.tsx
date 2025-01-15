import LookHistory from "@/components/top/LookHistoryItems/LookHistory";
import NewItems from "@/components/top/NewItems/NewItems";

const TopPage = async () => {
  const res =  await fetch('/api/items/searchAll');
  const data = await res.json()
  console.log(data)
  return (
    <>
      <NewItems />
      <LookHistory />
    </>
  );
};

export default TopPage;

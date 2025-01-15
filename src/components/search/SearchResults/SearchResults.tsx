import styles from "@/components/top/NewItems/NewItems.module.css";
import Item from "@/components/top/Item/Item";

const SearchResults = async ({ data }: { data: any }) => {
  console.log(data);

  if (!data || !data.Items) {
    return <p>データが取得できませんでした。</p>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.contentTitle}>検索結果</h2>
      <div className={styles.gridItems}>
        {data.Items.map((item: any, index: number) => (
          <Item key={index} linkPath={item.Item.itemUrl} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

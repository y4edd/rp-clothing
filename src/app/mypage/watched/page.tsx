import BreadList from "@/components/frame/breadList/BreadList";
import PageTitle from "@/components/frame/pageTitle/PageTitle";
import Item from "@/components/top/Item/Item";
import NewItems from "@/components/top/NewItems/NewItems";
import styles from "./page.module.css";
import ItemInformation from "@/components/item/ItemInfo/ItemInfo";
import type { ItemData } from "@/types/item/item";
type Props = {
  items: ItemData[] | null;
  title: string;
};


const watched = ({items,title}:Props) => {
  return (
    <>
      <BreadList
        bread={[
          { link: "/", title: "トップ" },
          { link: "/mypage", title: "マイページ" },
          { link: "/mypage/watched", title: "閲覧履歴" },
        ]}
      />
      <PageTitle title={"閲覧履歴"} />
      {/* 閲覧履歴 */}
      <div>
      <div className={styles.container}>
      <h2 className={styles.contentTitle}>{title}</h2>
      <div className={styles.gridItems}>
       <Item 
       itemCode="sample-item-code"
       itemName="sample-item-name"
       itemPrice={2000}
       itemImage="/sample/sample-item-image.png"/>
       <Item 
       itemCode="sample-item-code"
       itemName="sample-item-name"
       itemPrice={2000}
       itemImage="/sample/sample-item-image.png"/>
       <Item 
       itemCode="sample-item-code"
       itemName="sample-item-name"
       itemPrice={2000}
       itemImage="/sample/sample-item-image.png"/>
       <Item 
       itemCode="sample-item-code"
       itemName="sample-item-name"
       itemPrice={2000}
       itemImage="/sample/sample-item-image.png"/>
       <Item 
       itemCode="sample-item-code"
       itemName="sample-item-name"
       itemPrice={2000}
       itemImage="/sample/sample-item-image.png"/>
      </div>
    </div>
      </div>
    </>
  );
};

export default watched;

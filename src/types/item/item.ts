// 取得する商品の型情報
export type RakutenAPIItems = {
  itemCode: string;
  itemName: string;
  itemPrice: number;
  mediumImageUrls: ImageUrls[];
};
// 商品の画像のURL情報
export type ImageUrls = {
  imageUrl: string;
};

// Itemコンポーネントの型情報
export type Item = {
  itemCode: string;
  itemName: string;
  itemPrice: number;
  itemImage: string;
};

// 商品のリスト情報(Itemsの中の構造)
export type ItemListModel = { 
  Item: RakutenAPIItems;
}
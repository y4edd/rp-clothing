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
export type ItemData = {
  itemCode: string;
  itemName: string;
  itemPrice: number;
  itemImage?: string;
  mediumImageUrls?: { imageUrl: string }[];
};

// 商品のリスト情報(Itemsの中の構造)
export type ItemListModel = {
  Item: RakutenAPIItems;
};

// 検索をかける際の、商品のカテゴリの種類
export type CategoryProps = "tops" | "pants" | "suits" | "overalls" | "rainwear" | "coats";

// 楽天APIから取得する商品の型情報
export type RakutenItemDetailModel = {
  itemName: string;
  itemCode: string;
  mediumImageUrls: ImageUrls[];
  itemPrice: string;
  itemCaption: string;
  shopName: string;
  shopCode: string;
  shopUrl: string;
};
// クライアント側で使用する商品詳細の型情報
export type ItemDetailModel = {
  itemName: string;
  itemCode: string;
  itemPrice: string;
  itemImage: string;
  itemCaption: string[];
  shopCode: string;
  shopName: string;
  shopUrl: string;
};

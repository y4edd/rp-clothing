// 取得する商品の型情報
export type Item = {
  itemCode: string;
  itemName: string;
  itemPrice: number;
  mediumImageUrls: ImageUrls[];
};
// 商品の画像のURL情報
export type ImageUrls = {
  imageUrl: string;
};

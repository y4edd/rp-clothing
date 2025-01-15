// 商品のリスト情報(Itemsの中の構造)
export interface ItemListModel {
  Item: ItemModel;
}
// 商品の画像のURL情報
interface ImageUrls {
  imageUrl: string;
}
// 商品の詳細情報
export interface ItemModel {
  affiliateRate: number;
  affiliateUrl: string;
  asurakuArea: string;
  asurakuClosingTime: string;
  asurakuFlag: number;
  availability: number;
  catchcopy: string;
  creditCardFlag: number;
  endTime: string;
  genreId: string;
  giftFlag: number;
  imageFlag: number;
  itemCaption: string;
  itemCode: string;
  itemName: string;
  itemPrice: number;
  itemPriceBaseField: string;
  itemPriceMax1: number;
  itemPriceMax2: number;
  itemPriceMax3: number;
  itemPriceMin1: number;
  itemPriceMin2: number;
  itemPriceMin3: number;
  itemUrl: string;
  mediumImageUrls: ImageUrls[];
  pointRate: number;
  pointRateEndTime: string;
  pointRateStartTime: string;
  postageFlag: number;
  reviewAverage: number;
  reviewCount: number;
  shipOverseasArea: string;
  shipOverseasFlag: number;
  shopAffiliateUrl: string;
  shopCode: string;
  shopName: string;
  shopOfTheYearFlag: number;
  shopUrl: string;
  smallImageUrls: ImageUrls[];
  startTime: string;
  tagIds: number[];
  taxFlag: number;
}

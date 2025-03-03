export type CartItem = {
  itemName: string;
  itemCode: string;
  itemPrice: number;
  itemImage: string;
  shopCode: string;
  shopName: string;
  shopUrl: string;
  quantity: number;
};

export type CartItemArr = CartItem[];

export type CartItemInRedis = [
  {
    cartItem: string;
    quantity: number;
  }
]

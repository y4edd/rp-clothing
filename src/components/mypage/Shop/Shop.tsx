import Link from "next/link";

export type ShopProps = {
  shopName: string;
  shopUrl: string;
};
const Shop = ({ shopName, shopUrl }: ShopProps) => {
  console.log(shopName);
  return <Link href={shopUrl}>{shopName}</Link>;
};

export default Shop;

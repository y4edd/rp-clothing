import { render, screen } from "@testing-library/react";
import ItemInfo from "./ItemInfo";

jest.mock("@/components/top/FavoriteButton/FavoriteButton", () => () => <div>FavoriteButton</div>);
jest.mock("../FavoriteShopButton/FavoriteShopButton", () => () => <div>FavoriteShopButton</div>);
jest.mock("../SelectQuantity/SelectQuantity", () => () => <div>SelectQuantity</div>);
describe("ItemInfoコンポーネントのテスト", () => {
  const mockItemData = {
    itemName: "テスト",
    itemCode: "001",
    itemPrice: "2000",
    itemImage: "/testPath",
    itemCaption: ["テキスト", "テキスト", "テキスト"],
    shopCode: "111",
    shopName: "テストショップ",
    shopUrl: "/testShopPath",
  };
  test("正常にテキストが表示されていること確認", () => {
    render(<ItemInfo itemData={mockItemData} />);
    const itemNameElem = screen.getByText("テスト");
    const shopNameElem = screen.getByText("テストショップ");
    const itemPriceElem = screen.getByText("¥ 2000");

    expect(itemNameElem).toBeInTheDocument();
    expect(shopNameElem).toBeInTheDocument();
    expect(itemPriceElem).toBeInTheDocument();
  });
});

import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import TotalPrice from "./TotalPrice";

const mockCartItemArr = [
  {
    itemName: "テスト",
    itemCode: "test:333",
    itemPrice: 6000,
    itemImage: "test.image",
    shopCode: "testShop",
    shopName: "testShopman",
    shopUrl: "testshop.image",
    quantity: 5,
  },
];

describe("TotalPriceコンポーネントのテスト", () => {
  test("「お買い物を続ける」テキストが表示されること", () => {
    render(<TotalPrice cartItemArr={mockCartItemArr} />);
    const linkBtn = screen.getByRole("link", { name: "お買い物を続ける" });
    expect(linkBtn).toBeInTheDocument();
  });

  test("合計金額が正常に表示されること", () => {
    render(<TotalPrice cartItemArr={mockCartItemArr} />);
    const priceNumber = 30000;
    const price = priceNumber.toLocaleString();
    const p = screen.getByText(`合計金額：${price}円`);
    expect(p).toBeInTheDocument();
  });
});

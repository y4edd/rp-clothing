import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import CartItem from "./CartItem";

// サーバーアクションズの関数をモック化（jestはブラウザ環境下でのみ動くため）
jest.mock("@/utils/actions", () => ({
  deleteItem: jest.fn(() => Promise.resolve()),
}));

const mockItem = {
  itemName: "アイテム",
  itemCode: "itemCode:1",
  itemPrice: 6000,
  itemImage: "item.image",
  shopCode: "shopMan",
  shopName: "shop",
  shopUrl: "shop.image",
  quantity: 5,
};

const mockUserId = 1;

describe("CartItemコンポーネントのテスト", () => {
  test("画面にコンポーネントが正常に表示されること", () => {
    render(<CartItem item={mockItem} userId={mockUserId} />);
    const price = screen.getAllByText("価格：");
    const firstPrice = price[0];
    expect(firstPrice).toBeInTheDocument();
  });
});

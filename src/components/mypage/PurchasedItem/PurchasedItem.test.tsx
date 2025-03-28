import { render, screen } from "@testing-library/react";
import PurchasedItem from "./PurchasedItem";

const mockHistory = {
  itemCode: "itemCode:1",
  itemName: "アイテム",
  itemPrice: 6000,
  itemImage: "item.image",
  itemShop: "shop",
  createdAt: "2021-01-01",
  quantity: 5,
};

describe("PurchasedItemコンポーネントのテスト", () => {
  test("画面にコンポーネントが正常に表示されること", () => {
    render(<PurchasedItem purchasedHistory={mockHistory} />);
    const prise = screen.getAllByText("価格：6000円");
    expect(prise[0]).toBeInTheDocument();

    const itemName = screen.getAllByText("商品名：アイテム");
    expect(itemName[0]).toBeInTheDocument();

    const quantity = screen.getAllByText("数量：5");
    expect(quantity[0]).toBeInTheDocument();

    const shopName = screen.getAllByText("shop");
    expect(shopName[0]).toBeInTheDocument();

    const createdAt = screen.getAllByText("2021-01-01");
    expect(createdAt[0]).toBeInTheDocument();
  });
});

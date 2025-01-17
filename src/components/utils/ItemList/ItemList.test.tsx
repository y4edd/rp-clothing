import { render, screen } from "@testing-library/react";
import ItemList from "./ItemList";

describe("ItemListコンポーネントのテスト", () => {
  const mockItemData = [
    { itemName: "Item 1", itemCode: "001", itemImage: "/", itemPrice: 1000 },
    { itemName: "Item 2", itemCode: "002", itemImage: "/", itemPrice: 2000 },
  ];

  test("正常にItemListコノンポーネントが表示される", () => {
    render(<ItemList items={mockItemData} title="テスト" />);
    const titleText = screen.getByText("テスト");

    expect(titleText).toBeInTheDocument();
  });

  // 結合テスト
  test("データに欠損があった場合、NoItemコンポーネントが表示され、取得できない旨のメッセージが表示される", () => {
    render(<ItemList items={null} title="テスト" />);

    const errorText = screen.getByText("ご指定の商品がありませんでした");
    expect(errorText).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import Item from "./Item";

describe("Itemコンポーネントのテスト", () => {
  const mockName = "商品名";
  const mockCode = "001";
  const mockUrl = "/";
  const mockPrice = 2000;
  test("画像が存在することを確認", () => {
    render(
      <Item
        itemName={mockName}
        itemCode={mockCode}
        itemImage={mockUrl}
        itemPrice={mockPrice}
      />
    );
    const element = screen.getByAltText("アイテム画像");
    expect(element).toBeInTheDocument();
  });
  test("Propsで渡されたデータが正常に表示されていることを確認", () => {
    render(
      <Item
        itemName={mockName}
        itemCode={mockCode}
        itemImage={mockUrl}
        itemPrice={mockPrice}
      />
    );
    const itemName = screen.getByText("商品名");
    const itemPrice = screen.getByText("金額 : ¥ 2,000 (税込)");
    expect(itemName).toBeInTheDocument();
    expect(itemPrice).toBeInTheDocument();
  });
});

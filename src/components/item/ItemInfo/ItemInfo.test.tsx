import { render, screen } from "@testing-library/react";
import ItemInfo from "./ItemInfo";

describe("ItemInfoコンポーネントのテスト", () => {
  test("正常にテキストが表示されていること確認", () => {
    render(<ItemInfo />);
    const itemNameElem = screen.getByText("商品名 :");
    const shopNameElem = screen.getByText("販売店舗 :");
    const itemPriceElem = screen.getByText("値段 :");
    expect(itemNameElem).toBeInTheDocument();
    expect(shopNameElem).toBeInTheDocument();
    expect(itemPriceElem).toBeInTheDocument();
  });
});

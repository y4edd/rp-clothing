import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import NoCartItems from "./NoCartItems";

describe("NoCartItemsコンポーネントのテスト", () => {
  test("「カートに商品が登録されていません」が表示されていること", () => {
    render(<NoCartItems />);
    const text = screen.getByText("カートに商品が登録されていません");
    expect(text).toBeInTheDocument();
  });
});

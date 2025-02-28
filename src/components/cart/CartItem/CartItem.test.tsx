import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import CartItem from "./CartItem";

describe("CartItemコンポーネントのテスト", () => {
  test("画面にコンポーネントが正常に表示されること", () => {
    render(<CartItem />);
    const price = screen.getAllByText("価格：");
    const firstPrice = price[0];
    expect(firstPrice).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import PriceCondition from "./PriceCondition";

describe("PriceConditionコンポーネント", () => {
  test("値段を入力するフォームが正しくレンダリングされていること", () => {
    render(<PriceCondition />);

    const title = screen.getByText("値段");
    expect(title).toBeInTheDocument();
  });
});

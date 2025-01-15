import { render, screen } from "@testing-library/react";
import CategoryCondition from "./CategoryCondition";

describe("CategoryConditionコンポーネント", () => {
  test("タイトルが正しくレンダリングされていること", () => {
    render(<CategoryCondition />);

    const title = screen.getByText("カテゴリ");
    expect(title).toBeInTheDocument();
  });
});

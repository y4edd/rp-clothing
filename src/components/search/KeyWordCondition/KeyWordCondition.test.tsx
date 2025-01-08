import { render, screen } from "@testing-library/react";
import KeyWordCondition from "./KeyWordCondition";

describe ("KeyWordConditionコンポーネント", () => {
  test("キーワードを入力するフォームが正しくレンダリングされていること", () => {
    render(<KeyWordCondition />);

    const title = screen.getByText("キーワード");
    expect(title).toBeInTheDocument();
  });
});

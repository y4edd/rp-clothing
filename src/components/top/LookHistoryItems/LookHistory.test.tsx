import { render, screen } from "@testing-library/react";
import LookHistory from "./LookHistory";

describe("LookHistoryコンポーネントのテスト", () => {
  test("最近チェックしたアイテムが表示されている", () => {
    render(<LookHistory />);
    const element = screen.getByText("最近チェックしたアイテム");
    expect(element).toBeInTheDocument();
  });
});

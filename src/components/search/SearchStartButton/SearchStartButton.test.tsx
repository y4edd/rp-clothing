import { render, screen } from "@testing-library/react";
import SearchStartButton from "./SearchStartButton";

describe("SearchStartButtonコンポーネントのテスト", () => {
  test("「検索」ボタンが正しくレンダリングされること", () => {
    render(<SearchStartButton />);

    const button = screen.getByRole("button", { name: "検索" });
    expect(button).toBeInTheDocument();
  });
});

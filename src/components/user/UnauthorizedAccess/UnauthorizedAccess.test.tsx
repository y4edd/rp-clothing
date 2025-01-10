import { render, screen } from "@testing-library/react";
import UnauthorizedAccess from "./UnauthorizedAccess";

describe("UnauthorizedAccessコンポーネントのテスト", () => {
  test("正常にテキストが表示されていることを確認", () => {
    render(<UnauthorizedAccess />);
    const text1 = screen.getByText("ログイン状態を確認できませんでした。");
    const text2 = screen.getByText("下記ボタンよりログインしてください。");

    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });
});

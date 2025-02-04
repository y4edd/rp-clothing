import { render, screen } from "@testing-library/react";
import DeleteConfirmText from "./DeleteConfirmText";

describe("DeleteConfirmTextコンポーネントのテスト", () => {
  test("テキストが表示されること", () => {
    render(<DeleteConfirmText />);
    screen.debug();
    const text1 = screen.getByText("本当に削除しますか ?");
    const text2 = screen.getByText("下記情報は削除されます");
    const span = screen.getByText("すべて");
    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(span).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import Item from "./Item";

describe("Itemコンポーネントのテスト", () => {
  test("画像が存在することを確認", () => {
    render(<Item linkPath="/" />);
    const element = screen.getByAltText("アイテム画像");
    expect(element).toBeInTheDocument();
  });
});

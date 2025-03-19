import { render, screen } from "@testing-library/react";
import FavoriteButton from "./FavoriteButton";

describe("FavoriteButton コンポーネントのテスト", () => {
  test("適切にアイコンボタン表示されていることを確認", () => {
    render(<FavoriteButton itemCode="1" />);
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  });
});

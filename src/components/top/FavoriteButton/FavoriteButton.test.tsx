import { render, screen } from "@testing-library/react";
import FavoriteBUtton from "./FavoriteBUtton";

describe("FavoriteButton コンポーネントのテスト", () => {
  test("適切にアイコンボタン表示されていることを確認", () => {
    render(<FavoriteBUtton />);
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  });
});

import ToFavoriteButton from "@/components/favorite/toFavoriteButton/ToFavoriteButton";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ToFavoriteButton コンポーネントの単体テスト", () => {
  test("ボタンが正しくレンダリングされること", () => {
    render(<ToFavoriteButton />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    // お気に入りのアイコンがレンダリングされているか確認
    const icon = screen.getByTestId("FavoriteBorderIcon");
    expect(icon).toBeInTheDocument();
  });

  test("ボタンをクリックするとイベントが発生すること", async () => {
    const user = userEvent.setup();
    console.log = jest.fn();

    render(<ToFavoriteButton />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(console.log).toHaveBeenCalledWith("お気に入りがクリックされました");
  });
});

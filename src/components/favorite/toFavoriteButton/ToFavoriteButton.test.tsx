import ToFavoriteButton from "@/components/favorite/toFavoriteButton/ToFavoriteButton";
import { render, screen } from "@testing-library/react";

jest.mock("next/navigation", () => ({ useRouter: jest.fn() }));

describe("ToFavoriteButton コンポーネントの単体テスト", () => {
  test("ボタンが正しくレンダリングされること", () => {
    render(<ToFavoriteButton />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    // お気に入りのアイコンがレンダリングされているか確認
    const icon = screen.getByTestId("FavoriteBorderIcon");
    expect(icon).toBeInTheDocument();
  });
});

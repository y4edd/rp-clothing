import { fireEvent, render, screen } from "@testing-library/react";
import WordSearch from "./WordSearch";

describe("WordSearch コンポーネント", () => {
  test("検索フォームが正しくレンダリングされること", () => {
    render(<WordSearch />);

    const input = screen.getByPlaceholderText("何かお探しですか？");
    expect(input).toBeInTheDocument();
  });

  test("検索ボックスに入力ができること", () => {
    render(<WordSearch />);

    const input = screen.getByPlaceholderText("何かお探しですか？") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "テスト検索" } });
    expect(input.value).toBe("テスト検索");
  });
});

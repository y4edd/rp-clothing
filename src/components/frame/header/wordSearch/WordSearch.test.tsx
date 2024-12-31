import { render, screen, fireEvent } from "@testing-library/react";
import WordSearch from "./WordSearch";

describe("WordSearch コンポーネント", () => {
  test("検索フォームが正しくレンダリングされること", () => {
    render(<WordSearch />);
    
    const input = screen.getByPlaceholderText("何かお探しですか？");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");

    const button = screen.getByRole("button", { name: "検索" });
    expect(button).toBeInTheDocument();
  });

  test("検索ボックスに入力ができること", () => {
    render(<WordSearch />);

    const input = screen.getByPlaceholderText("何かお探しですか？") as HTMLInputElement;
    
    fireEvent.change(input, { target: { value: "テスト検索" } });
    expect(input.value).toBe("テスト検索");
  });

  test("検索ボタンがクリック可能であること", () => {
    render(<WordSearch />);

    const button = screen.getByRole("button", { name: "検索" });

    // 特定の動作を確認するモック関数はないため、エラーが出ないことを確認
    expect(button).toBeEnabled();
  });

  test("フォームのアクセシビリティ属性が正しく設定されていること", () => {
    render(<WordSearch />);

    const input = screen.getByPlaceholderText("何かお探しですか？");
    const button = screen.getByRole("button", { name: "検索" });

    expect(input).toHaveAttribute("aria-label", "検索ボックス");
    expect(button).toHaveAttribute("aria-label", "検索");
  });
});

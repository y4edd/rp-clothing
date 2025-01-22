import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useRouter } from "next/navigation";
import WordSearch from "./WordSearch";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("WordSearch コンポーネント", () => {
  let pushMock: jest.Mock;

  beforeEach(() => {
    pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

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

  test("キーワードが入力され、ページの遷移が行われる", async () => {
    render(<WordSearch />);

    const input = screen.getByPlaceholderText("何かお探しですか？") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "パーカー" } });

    const form = input.closest("form");
    if (form) {
      fireEvent.submit(form);
    }

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith("/search?keyWord=パーカー");
    });
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import SearchModal from "./SearchModal";
import { useRouter, useSearchParams } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

const mockRouter = {
  push: jest.fn(),
  back: jest.fn(),
};

const searchParams = {}

describe("SearchModal コンポーネントのテスト", () => {

  test("クエリパラメータがない場合、モーダルが表示される", () => {
    // searchParams のモック
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue(null),
      toString: jest.fn().mockReturnValue(""),
    });

    render(<SearchModal />);
    const modalTitle = screen.getByText("検索条件");
    expect(modalTitle).toBeInTheDocument();
  });
});

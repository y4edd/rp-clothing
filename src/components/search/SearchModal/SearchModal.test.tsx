import { render, screen } from "@testing-library/react";
import { useSearchParams } from "next/navigation";
import SearchModal from "./SearchModal";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

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

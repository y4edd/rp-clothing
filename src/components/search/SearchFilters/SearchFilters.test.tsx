import { fireEvent, render, screen } from "@testing-library/react";
import SearchFilters from "./SearchFilters";
import { toast } from "react-toastify";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
  },
}));

// クエリパラメータ
const params = {
  minPrice: "2000",
  maxPrice: "20000",
  selectedCategory: "pants",
  keyWord: "軍パン",
};

describe("SearchFiltersコンポーネントのテスト", () => {
  test("SearchFiltersコンポーネントが正常に表示されること", () => {
    render(<SearchFilters searchParams={params} />);
    const text = screen.getByText("検索内容：");
    expect(text).toBeInTheDocument();
  });

  test("カテゴリ条件を削除しようとすると、エラーメッセージが表示されること", () => {
    render(<SearchFilters searchParams={params} />);
    const categoryCondition = screen.getByTestId("ズボン・パンツ"); // 変換後のラベルで指定
    fireEvent.click(categoryCondition);

    expect(toast.error).toHaveBeenCalledWith(
      "カテゴリーは検索条件から削除できません！",
      expect.objectContaining({ autoClose: 1500 })
    );
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import { toast } from "react-toastify";
import SearchFilters from "./SearchFilters";

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
});

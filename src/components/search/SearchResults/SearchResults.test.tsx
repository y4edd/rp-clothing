import { fetchResults } from "@/utils/apiFunc";
import { render, waitFor } from "@testing-library/react";
import SearchResults from "./SearchResults";

jest.mock("@/utils/apiFunc", () => ({
  fetchResults: jest.fn(() =>
    Promise.resolve([
      { itemCode: "001", itemName: "パーカーA", itemPrice: 2500, itemImage: "/" },
      { itemCode: "002", itemName: "パーカーB", itemPrice: 4000, itemImage: "/" },
    ]),
  ),
}));

describe("SearchResultsコンポーネントのテスト", () => {
  const mockParams = {
    minPrice: "2000",
    maxPrice: "6000",
    selectedCategory: "tops",
    keyWord: "パーカー",
  };

  test("モックデータが正しく表示される", async () => {
    render(<SearchResults searchParams={mockParams} />);

    // fetchResultsが正しく呼び出されているか確認
    await waitFor(() =>
      expect(fetchResults).toHaveBeenCalledWith(
        "minPrice=2000&maxPrice=6000&selectedCategory=tops&keyWord=%E3%83%91%E3%83%BC%E3%82%AB%E3%83%BC",
      ),
    );

    const itemName = "パーカーA";
    expect(itemName).toBeInTheDocument;
  });
});

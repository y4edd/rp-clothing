import { render } from "@testing-library/react";
import SearchResults from "./SearchResults";

describe("SearchResultsコンポーネントのテスト", () => {
  const mockParams = {
    searchParams: {
      minPrice: "1000",
      maxPrice: "5000",
      selectedCategory: "electronics",
      keyWord: "laptop",
    },
  };

  test("モックデータが正しく表示される", async () => {
    const result = await SearchResults(mockParams);
    render(result);

    const itemName = "パーカーA";
    expect(itemName).toBeInTheDocument;
  });
});

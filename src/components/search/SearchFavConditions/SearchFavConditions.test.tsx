import { fireEvent, render, screen } from "@testing-library/react";
import SearchFavConditions from "./SearchFavConditions";
import { useRouter } from "next/navigation";

const favConditionsMock = [{
  searchConditionId: 1,
  conditionName: "テスト",
  minPrice: "2000",
  maxPrice: "6000",
  selectedCategory: "tops",
  keyWord: "プチプラ",
},{
  searchConditionId: 2,
  conditionName: "プチプラ",
  minPrice: "20000",
  maxPrice: "60000",
  selectedCategory: "pants",
  keyWord: "千葉代表",
}];

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const pushMock = jest.fn();
(useRouter as jest.Mock).mockReturnValue({
  push: pushMock,
});

describe("FavConditionsコンポーネント", () => {
  test("タイトルが正しくレンダリングされていること", () => {
    render(<SearchFavConditions favConditions={favConditionsMock}/>);

    const title = screen.getByText("お気に入り条件");
    expect(title).toBeInTheDocument();
  });

  test("お気に入りの検索条件の名前が表示され、ボタン押下後、正常に画面遷移が行われていること", () => {
    render(<SearchFavConditions favConditions={favConditionsMock}/>);

    const conditionNameButton1 = screen.getByRole("button", { name: "テスト" });
    fireEvent.click(conditionNameButton1);

    // URLをエンコードして比較する
    const expectedUrl = "/search?minPrice=2000&maxPrice=6000&selectedCategory=tops&keyWord=プチプラ";
    const actualUrl = pushMock.mock.calls[0][0];

    expect(decodeURIComponent(actualUrl)).toBe(expectedUrl);

  })
});

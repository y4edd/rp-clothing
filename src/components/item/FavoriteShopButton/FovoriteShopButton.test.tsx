import { render, screen } from "@testing-library/react";
import FavoriteShopButton from "./FavoriteShopButton";

// モック関数の型を明示的に指定
jest.mock("@/utils/apiFunc", () => ({
  deleteFavShop: jest.fn() as jest.MockedFunction<
    (userId: string, shopCode: string) => Promise<Response>
  >,
  postFavShop: jest.fn() as jest.MockedFunction<
    (userId: string, shopCode: string) => Promise<Response>
  >,
}));

describe("FavoriteShopButtonコンポーネントのテスト", () => {
  test("正常にbuttonが表示されることを確認", () => {
    render(<FavoriteShopButton userId="1" shopCode="test" />);

    const btnElem = screen.getByRole("button");
    expect(btnElem).toBeInTheDocument();
  });
});

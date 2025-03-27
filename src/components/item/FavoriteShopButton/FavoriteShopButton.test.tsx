import { render, screen } from "@testing-library/react";
import FavoriteShopButton from "./FavoriteShopButton";
import { deleteFavShop, fetchFavShop } from "@/utils/apiFunc";
import { fireEvent, waitFor } from "@testing-library/dom";

// モック関数の型を明示的に指定
jest.mock("@/utils/apiFunc", () => ({
  deleteFavShop: jest.fn() as jest.MockedFunction<
    (userId: string, shopCode: string) => Promise<Response>
  >,
  postFavShop: jest.fn() as jest.MockedFunction<
    (userId: string, shopCode: string, shopName: string, shopUrl: string) => Promise<Response>
  >,
  fetchFavShop: jest.fn() as jest.MockedFunction<(shopCode: string) => Promise<boolean>
  >,
}));

describe("FavoriteShopButtonコンポーネントのテスト", () => {
  test("正常にbuttonが表示されることを確認", () => {
    render(<FavoriteShopButton userId="1" shopCode="test" shopName="testShop" shopUrl="http://test.com" />);
    const btnElem = screen.getByRole("button");
    expect(btnElem).toBeInTheDocument();
  });

  test("お気に入り登録済みの場合、FavoriteIconが表示されることを確認", async () => {
    (fetchFavShop as jest.Mock).mockResolvedValue(true);

    render(<FavoriteShopButton userId="1" shopCode="test" shopName="testShop" shopUrl="http://test.com" />);
    await waitFor(() => {
      expect(screen.getByTestId("FavoriteIcon")).toBeInTheDocument();
    });
  });

  test("お気に入り登録済みのボタンを押すと削除され、アイコンが変わる", async () => {
    // 最初は「お気に入り状態（true）」
    (fetchFavShop as jest.Mock).mockResolvedValue(true);
    // 削除APIは成功レスポンスを返す
    (deleteFavShop as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ message: "削除しました" }),
    });
  
    render(<FavoriteShopButton userId="1" shopCode="test" shopName="testShop" shopUrl="http://test.com" />);
  
    await waitFor(() => {
      expect(screen.getByTestId("FavoriteIcon")).toBeInTheDocument();
    });
  
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
  
    await waitFor(() => {
      expect(screen.getByTestId("FavoriteBorderIcon")).toBeInTheDocument();
    });

    expect(deleteFavShop).toHaveBeenCalledWith("1", "test");
  });
  
});

import { render, screen } from "@testing-library/react";
import MypageContents from "./MypageContents";

jest.mock("../AccountList/AccountList", () => () => <div>AccountList</div>);
jest.mock("../ShoppingList/ShoppingList", () => () => <div>ShoppingList</div>);
jest.mock("../FavoriteList/FavoriteList", () => () => <div>FavoriteList</div>);

describe("MypageContentsコンポーネントのテスト", () => {
  test("指定のコンポーネントが３つ正常に表示されることを確認", () => {
    render(<MypageContents />);
    const AccountComp = screen.getByText("AccountList");
    const ShoppingComp = screen.getByText("ShoppingList");
    const FavoriteComp = screen.getByText("FavoriteList");

    expect(AccountComp).toBeInTheDocument();
    expect(ShoppingComp).toBeInTheDocument();
    expect(FavoriteComp).toBeInTheDocument();
  });
});

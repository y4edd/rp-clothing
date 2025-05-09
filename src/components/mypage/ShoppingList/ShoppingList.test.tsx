import { render, screen } from "@testing-library/react";
import ShoppingList from "./ShoppingList";

jest.mock("@/components/mypage/ActionLink/ActionLink", () => () => <div>ActionLink</div>);

describe("AccountListコンポーネントのテスト", () => {
  test("テキストが正常に表示されていることを確認", () => {
    render(<ShoppingList />);
    const textElem = screen.getByText("ショッピング関連");
    expect(textElem).toBeInTheDocument();
  });
  test("ActonButtonコンポーネントが3つ正常に表示されることを確認", () => {
    render(<ShoppingList />);
    const components = screen.getAllByText("ActionLink");
    expect(components).toHaveLength(3);
  });
});

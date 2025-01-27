import { render, screen } from "@testing-library/react";
import FavoriteList from "./FavoriteList";

jest.mock("@/components/mypage/ActionButton/ActionButton", () => () => <div>ActionButton</div>);

describe("AccountListコンポーネントのテスト", () => {
  test("テキストが正常に表示されていることを確認", () => {
    render(<FavoriteList />);
    const textElem = screen.getByText("お気に入り関連");
    expect(textElem).toBeInTheDocument();
  });
  test("ActonButtonコンポーネントが2つ正常に表示されることを確認", () => {
    render(<FavoriteList />);
    const components = screen.getAllByText("ActionButton");
    expect(components).toHaveLength(2);
  });
});

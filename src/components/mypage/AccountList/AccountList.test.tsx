import { render, screen } from "@testing-library/react";
import AccountList from "./AccountList";

jest.mock("@/components/mypage/ActionButton/ActionButton", () => () => <div>ActionButton</div>);

describe("AccountListコンポーネントのテスト", () => {
  test("テキストが正常に表示されていることを確認", () => {
    render(<AccountList />);
    const textElem = screen.getByText("アカウント関連");
    expect(textElem).toBeInTheDocument();
  });
  test("ActonButtonコンポーネントが3つ正常に表示されることを確認", () => {
    render(<AccountList />);
    const components = screen.getAllByText("ActionButton");
    expect(components).toHaveLength(3);
  });
});

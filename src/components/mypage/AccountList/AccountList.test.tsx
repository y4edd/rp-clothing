import { render, screen } from "@testing-library/react";
import AccountList from "./AccountList";

jest.mock("@/components/mypage/ActionButton/ActionButton", () => () => <div>ActionButton</div>);
jest.mock("@/components/mypage/ActionLink/ActionLink", () => () => <div>ActionLink</div>);
jest.mock("next/navigation", () => ({ useRouter: jest.fn() }));

describe("AccountListコンポーネントのテスト", () => {
  test("テキストが正常に表示されていることを確認", () => {
    render(<AccountList />);
    const textElem = screen.getByText("アカウント関連");
    expect(textElem).toBeInTheDocument();
  });
  test("ActonButtonコンポーネントが3つ正常に表示されることを確認", () => {
    render(<AccountList />);
    const linkComponent = screen.getAllByText("ActionLink");
    const buttonComponent = screen.getAllByText("ActionButton");
    expect(linkComponent).toHaveLength(1);
    expect(buttonComponent).toHaveLength(2);
  });
});

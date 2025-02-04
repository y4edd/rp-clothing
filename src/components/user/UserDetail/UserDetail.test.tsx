import { render, screen } from "@testing-library/react";
import UserDetail from "./UserDetail";
import UserInfo from "./UserInfo/UserInfo";

jest.mock("./UserInfo/UserInfo", () => () => {
  return <div>UserInfo</div>;
});
jest.mock("./UserLinkButtons/UserLinkButtons", () => () => {
  return <div>UserButtons</div>;
});
describe("UserDetailコンポーネントのテスト", () => {
  test("２つのコンポーネントが表示される事を確認", () => {
    render(<UserDetail />);
    screen.debug();
    const component1 = screen.getByText("UserInfo");
    const component2 = screen.getByText("UserButtons");
    expect(component1).toBeInTheDocument();
    expect(component2).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import UserEdit from "./UserEdit";

jest.mock("./EditForm/EditForm", () => () => {
  return <div>EditForm</div>;
});
describe("UserEditコンポーネントのテスト", () => {
  test("EditFormコンポーネントが表示されることを確認", () => {
    render(<UserEdit />);
    expect(screen.getByText("EditForm")).toBeInTheDocument();
  });
});

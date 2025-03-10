import { render, screen } from "@testing-library/react";
import UserEdit from "./UserEdit";

jest.mock("./EditForm/EditForm", () => () => {
  return <div>EditForm</div>;
});

jest.mock("next/navigation", () => ({ useRouter: jest.fn() }));

describe("UserEditコンポーネントのテスト", () => {
  test("EditFormコンポーネントが表示されることを確認", () => {
    const mockUserData = {
      name: "test",
      email: "test@test.com",
      birthday: "2001-01-29",
    };
    render(<UserEdit userData={mockUserData} />);
    expect(screen.getByText("EditForm")).toBeInTheDocument();
  });
});

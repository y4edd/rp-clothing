import { render, screen } from "@testing-library/react";
import LoginPassword from "./LoginPassword";

const mockRegister = jest.fn();
const mockErrors = { password: { message: "※必須です。", type: "required" } };

describe("LoginPasswordコンポーネントのテスト", () => {
  test("テキストが表示されていること", () => {
    render(<LoginPassword register={mockRegister} errors={mockErrors} />);
    expect(screen.getByText("パスワード")).toBeInTheDocument();
    expect(screen.getByText("例：password")).toBeInTheDocument();
  });
});

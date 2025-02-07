import { render, screen } from "@testing-library/react";
import LoginEmail from "./LoginEmail";

const mockRegister = jest.fn();
const mockErrors = { email: { message: "※必須です。", type: "required" } };

describe("LoginEmailコンポーネントのテスト", () => {
  test("テキストが表示されていること", () => {
    render(<LoginEmail register={mockRegister} errors={mockErrors} />);
    expect(screen.getByText("メールアドレス")).toBeInTheDocument();
    expect(screen.getByText("例：example.@clothing.com")).toBeInTheDocument();
  });
});

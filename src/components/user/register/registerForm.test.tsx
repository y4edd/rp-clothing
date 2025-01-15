import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("RegistrationFormコンポーネントのテスト", () => {
  test("ボタンが正しく表示されているか", () => {
    render(<RegisterForm />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("propsが正しく渡されているかどうか", () => {
    render(<RegisterForm />);
    const nameInput = screen.getByLabelText("ユーザー名");
    const emailInput = screen.getByLabelText("メールアドレス");

    expect(nameInput).toHaveAttribute("name", "name");
    expect(emailInput).toHaveAttribute("name", "email");

    const errorMessage = screen.queryByText("※入力必須です。");
    expect(errorMessage).toBeNull(); // エラーがないことを確認
  });
});

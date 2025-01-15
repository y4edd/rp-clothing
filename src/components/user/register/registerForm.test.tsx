import { render, screen } from "@testing-library/react";
import RegistrationForm from "./RegisterForm";

describe("RegistrationFormコンポーネントのテスト", () => {
  test("ボタンが正しく表示されているか", () => {
    render(<RegistrationForm />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("propsが正しく渡されているかどうか", () => {
    render(<RegistrationForm />);
    const nameInput = screen.getByLabelText("ユーザー名");
    const emailInput = screen.getByLabelText("メールアドレス");

    expect(nameInput).toHaveAttribute("name", "name");
    expect(emailInput).toHaveAttribute("name", "email");

    const errorMessage = screen.queryByText("※入力必須です。");
    expect(errorMessage).toBeNull(); // エラーがないことを確認
  });
});

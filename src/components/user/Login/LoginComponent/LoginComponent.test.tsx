import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginComponent from "./LoginComponent";

describe("LoginComponentコンポーネントのテスト", () => {
  test("フォームの内容が空の場合、エラーメッセージが表示すること", async () => {
    render(<LoginComponent />);

    const button = screen.getByRole("button", { name: "ログイン" });
    fireEvent.click(button);

    await waitFor(() => {
      const emailError = screen.getByTestId("email-error");
      expect(emailError).toHaveTextContent("※入力必須です。");

      const passwordError = screen.getByTestId("password-error");
      expect(passwordError).toHaveTextContent("※入力必須です。");
    });
  });
});

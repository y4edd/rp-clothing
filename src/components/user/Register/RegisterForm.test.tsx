import { render, screen, waitFor } from "@testing-library/react";
import RegisterForm from "./RegisterForm";
import userEvent from "@testing-library/user-event";
import { showToast } from "@/components/utils/toast/toast";

jest.mock("@/components/utils/toast/toast", () => ({
  showToast: jest.fn(),
  ToastContainerComponent: () => null,
}));

beforeEach(() => {
  global.fetch = jest.fn();
});

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
    expect(errorMessage).toBeNull();
  });

  test("フォームの入力が正しい場合、トースト通知が出る", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      status: 200,
      statusText: "OK",
      json: () => Promise.resolve({ message: "Success" }),
    });

    render(<RegisterForm />);
    const nameInput = screen.getByLabelText("ユーザー名");
    const emailInput = screen.getByLabelText("メールアドレス");
    const passwordInput = screen.getByLabelText("パスワード");
    const confirmPasswordInput = screen.getByLabelText("パスワード確認");

    await userEvent.type(nameInput, "テスト");
    await userEvent.type(emailInput, "test111@test.com");
    await userEvent.type(passwordInput, "1111111111");
    await userEvent.type(confirmPasswordInput, "1111111111");

    const submitButton = screen.getByRole("button", { name: "会員登録" });
    await userEvent.click(submitButton);

    await waitFor(() => expect(showToast).toHaveBeenCalledWith("会員登録が完了しました。"));
  });

  test("emailが重複する時、エラーメッセージが出る", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 409,
      statusText: "false",
      json: () =>
        Promise.resolve({
          message: "このメールアドレスはすでに登録しています。",
        }),
    });

    render(<RegisterForm />);
    const nameInput = screen.getByLabelText("ユーザー名");
    const emailInput = screen.getByLabelText("メールアドレス");
    const passwordInput = screen.getByLabelText("パスワード");
    const confirmPasswordInput = screen.getByLabelText("パスワード確認");

    await userEvent.type(nameInput, "テスト");
    await userEvent.type(emailInput, "test111@test.com");
    await userEvent.type(passwordInput, "1111111111");
    await userEvent.type(confirmPasswordInput, "1111111111");

    const submitButton = screen.getByRole("button", { name: "会員登録" });
    await userEvent.click(submitButton);

    await waitFor(() =>
      expect(screen.getByText("※このメールアドレスはすでに登録しています。")).toBeInTheDocument(),
    );
  });
});

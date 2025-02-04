import { fireEvent, render, screen } from "@testing-library/react";
import EditForm from "./EditForm";
import { useForm } from "react-hook-form";
import type { EditUserProps } from "@/types/user/user";
import { errorMessages } from "@/lib/user/register/errorMessage";

describe("EditFormコンポーネントのテスト", () => {
  const mockHandleSubmit = jest.fn();
  const TestComponent = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<EditUserProps>();
    return (
      <EditForm
        register={register}
        handleSubmit={handleSubmit(mockHandleSubmit)}
        errors={errors}
      />
    );
  };
  test("EditFormコンポーネントが表示されることを確認", () => {
    render(<TestComponent />);
    expect(screen.getByLabelText("ユーザー名")).toBeInTheDocument();
    expect(screen.getByLabelText("メールアドレス")).toBeInTheDocument();
    expect(screen.getByLabelText("パスワード")).toBeInTheDocument();
    expect(screen.getByText("例）RP太郎")).toBeInTheDocument();
    expect(screen.getByText("例）example@clothing.com")).toBeInTheDocument();
    expect(screen.getByText("例）password")).toBeInTheDocument();
  });

  test("3つの入力欄で未入力の時エラー出ることを確認", async () => {
    render(<TestComponent />);
    const submitButton = screen.getByRole("button", { name: "更新する" });
    fireEvent.click(submitButton);

    const nameMessage = await screen.findByTestId("name");
    const emailMessage = await screen.findByTestId("email");
    const passwordMessage = await screen.findByTestId("password");
    expect(nameMessage).toHaveTextContent(errorMessages.name.require);
    expect(emailMessage).toHaveTextContent(errorMessages.email.require);
    expect(passwordMessage).toHaveTextContent(errorMessages.password.require);
  });
  test("不正なメールアドレスが入力されたときにエラーメッセージが表示されることを確認", async () => {
    render(<TestComponent />);
    const emailInput = screen.getByLabelText("メールアドレス");
    fireEvent.change(emailInput, { target: { value: "example" } });
    const submitButton = screen.getByRole("button", { name: "更新する" });
    fireEvent.click(submitButton);

    const emailMessage = await screen.findByTestId("email");
    expect(emailMessage).toHaveTextContent(errorMessages.email.patternFormat);
  });
  test("メールアドレスにスペースが含まれているときにエラーメッセージが表示されることを確認", async () => {
    render(<TestComponent />);
    const emailInput = screen.getByLabelText("メールアドレス");
    fireEvent.change(emailInput, {
      target: { value: "example @clothing.com" },
    });
    const submitButton = screen.getByRole("button", { name: "更新する" });
    fireEvent.click(submitButton);

    const emailMessage = await screen.findByTestId("email");
    expect(emailMessage).toHaveTextContent(errorMessages.email.patternSpace);
  });
  test("パスワードが6文字未満の時にエラーメッセージが表示されることを確認", async () => {
    render(<TestComponent />);
    const passwordInput = screen.getByLabelText("パスワード");
    fireEvent.change(passwordInput, { target: { value: "12345" } });
    const submitButton = screen.getByRole("button", { name: "更新する" });
    fireEvent.click(submitButton);

    const passwordMessage = await screen.findByTestId("password");
    expect(passwordMessage).toHaveTextContent(errorMessages.password.minLength);
  });
});

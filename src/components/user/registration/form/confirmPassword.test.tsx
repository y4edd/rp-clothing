import { errorMessages } from "@/lib/user/register/message";
import type { FormProps } from "@/types/registration/registration";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import PasswordInput from "./password";
import ConfirmPasswordInput from "./confirmPassword";

const TestComponent = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = jest.fn();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PasswordInput register={register} errors={errors} />
      <ConfirmPasswordInput register={register} errors={errors} getValues={getValues} />
      <button type="submit">登録</button>
    </form>
  );
};

describe("ConfirmPasswordInput コンポーネントのテスト", () => {
  it("パスワードと一致していればエラーにならない", async () => {
    render(<TestComponent />);
    const passwordInput = screen.getByLabelText("パスワード");
    const confirmPasswordInput = screen.getByLabelText("パスワード確認");
    const submitButton = screen.getByText("登録");

    await userEvent.type(passwordInput, "123456");
    await userEvent.type(confirmPasswordInput, "123456");
    await userEvent.click(submitButton);

    expect(screen.queryByText(errorMessages.ConfirmPassword.confirm)).toBeNull();
  });

  it("パスワードと一致しない場合はエラーメッセージが表示される", async () => {
    render(<TestComponent />);
    const passwordInput = screen.getByLabelText("パスワード");
    const confirmPasswordInput = screen.getByLabelText("パスワード確認");
    const submitButton = screen.getByText("登録");

    await userEvent.type(passwordInput, "123456");
    await userEvent.type(confirmPasswordInput, "654321");
    await userEvent.click(submitButton);

    expect(screen.getByText(errorMessages.ConfirmPassword.confirm)).toBeInTheDocument();
  });
});

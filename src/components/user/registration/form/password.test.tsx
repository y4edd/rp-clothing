import { FormProps } from "@/types/registration/registration";
import { useForm } from "react-hook-form";
import PasswordInput from "./password";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { errorMessages } from "@/lib/user/register/message";

const TestComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: { email: "" },
  });

  const onSubmit = jest.fn();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <PasswordInput register={register} errors={errors} />
      <button type="submit">登録</button>
    </form>
  );
};

describe("PasswordInputコンポーネントのテスト", () => {
  test("パスワードが未入力の時、エラーメッセージが表示されること", async () => {
    render(<TestComponent />);
    const submitButton = screen.getByText("登録");
    await userEvent.click(submitButton);
    expect(
      screen.getByText(errorMessages.password.require)
    ).toBeInTheDocument();
  });
  test("パスワードが20文字以上の時、エラーメッセージが表示されること", async () => {
    render(<TestComponent />);
    const submitButton = screen.getByText("登録");
    await userEvent.type(submitButton, "99999999999999999999");
    await userEvent.click(submitButton);
    expect(
      screen.getByText(errorMessages.password.maxLength)
    ).toBeInTheDocument();
  });
  test("パスワードが6文字以内の時、エラーメッセージが表示されること", async () => {
    render(<TestComponent />);
    const submitButton = screen.getByText("登録");
    await userEvent.type(submitButton, "11111");
    await userEvent.click(submitButton);
    expect(
      screen.getByText(errorMessages.password.minLength)
    ).toBeInTheDocument();
  });

  test("パスワードが正常に入力された時、エラーメッセージは表示されないか", async () => {
    render(<TestComponent />);
    const submitButton = screen.getByText("登録");
    await userEvent.type(submitButton, "1111111");
    await userEvent.click(submitButton);
    expect(screen.queryByText(errorMessages.password.minLength)).toBeNull();
  });
});

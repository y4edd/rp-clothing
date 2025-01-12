import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import { errorMessages } from "@/lib/user/register/message";
import EmailInput from "./email";
import { FormProps } from "@/types/registration/registration";

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
      <EmailInput register={register} errors={errors} />
      <button type="submit">登録</button>
    </form>
  );
};

describe("EmailInput コンポーネントのテスト", () => {
  test("メールアドレスが未入力の場合、エラーメッセージが表示される", async () => {
    render(<TestComponent />);
    const submitButton = screen.getByText("登録");

    await userEvent.click(submitButton);

    expect(screen.getByText(errorMessages.email.require)).toBeInTheDocument();
  });

  test("正しいメールアドレスが入力された場合、エラーメッセージが表示されない", async () => {
    render(<TestComponent />);
    const emailInput = screen.getByLabelText("メールアドレス");
    const submitButton = screen.getByText("登録");

    await userEvent.type(emailInput, "example@clothing.com");

    await userEvent.click(submitButton);

    expect(screen.queryByText(errorMessages.email.require)).toBeNull();
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import { errorMessages } from "@/lib/user/register/message";
import ComfirmpasswordInput from "./confirmPassword";

const TestComponent = () => {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = jest.fn();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="password" {...register("password")} placeholder="パスワード" />
      <ComfirmpasswordInput
        register={register as any} // 型エラーを無視
        errors={errors}
        getValues={getValues as any} // 型エラーを無視
      />
      <button type="submit">登録</button>
    </form>
  );
};

describe("ComfirmpasswordInput コンポーネントのテスト", () => {
  it("パスワードと一致していればエラーにならない", async () => {
    render(<TestComponent />);
    const passwordInput = screen.getByPlaceholderText("パスワード");
    const confirmPasswordInput = screen.getByLabelText("パスワード確認");
    const submitButton = screen.getByText("登録");

    await userEvent.type(passwordInput, "password123");
    await userEvent.type(confirmPasswordInput, "password123");
    await userEvent.click(submitButton);

    expect(screen.queryByText(errorMessages.Comfirmpassword.confirm)).toBeNull();
  });

  it("パスワードと一致しない場合はエラーメッセージが表示される", async () => {
    render(<TestComponent />);
    const passwordInput = screen.getByPlaceholderText("パスワード");
    const confirmPasswordInput = screen.getByLabelText("パスワード確認");
    const submitButton = screen.getByText("登録");

    await userEvent.type(passwordInput, "password123");
    await userEvent.type(confirmPasswordInput, "differentPassword");
    await userEvent.click(submitButton);

    expect(screen.getByText(errorMessages.Comfirmpassword.confirm)).toBeInTheDocument();
  });
});

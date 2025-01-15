import { errorMessages } from "@/lib/user/register/errorMessage";
import type { FormProps } from "@/types/user/user";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import Name from "./name";

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
      <Name register={register} errors={errors} />
      <button type="submit">登録</button>
    </form>
  );
};

describe("Nameコンポーネントのテスト", () => {
  test("ユーザー名が未入力の場合、エラーメッセージが出ること", async () => {
    render(<TestComponent />);
    const submitButton = screen.getByText("登録");
    await userEvent.click(submitButton);
    expect(screen.getByText(errorMessages.name.require)).toBeInTheDocument();
  });

  test("ユーザー名が20文字以上の場合、エラーメッセージが出ること", async () => {
    render(<TestComponent />);
    const submitButton = screen.getByText("登録");
    await userEvent.type(submitButton, "テストテストテストテストテストテストテストテスト");
    expect(screen.getByText(errorMessages.name.maxLength)).toBeInTheDocument();
  });

  test("正しく入力した場合、メッセージが表示されないこと", async () => {
    render(<TestComponent />);
    const submitButton = screen.getByText("登録");
    await userEvent.type(submitButton, "テスト男");
    await userEvent.click(submitButton);
    expect(screen.queryByText(errorMessages.name.require)).toBeNull();
    expect(screen.queryByText(errorMessages.name.maxLength)).toBeNull();
  });
});

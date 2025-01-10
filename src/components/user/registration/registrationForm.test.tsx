import { describe } from "node:test";
import { fireEvent, render, screen } from "@testing-library/react";
import RegistrationForm from "./registrationForm";

describe("RegistrationFormコンポーネントのテスト", () => {
  test("各コンポーネントがレンダリングされていること", () => {
    render(<RegistrationForm />);
    expect(screen.getByText("ユーザー名")).toBeInTheDocument();
    expect(screen.getByText("メールアドレス")).toBeInTheDocument();
    expect(screen.getByText("生年月日")).toBeInTheDocument();
    expect(screen.getByText("パスワード")).toBeInTheDocument();
    expect(screen.getByText("パスワード確認")).toBeInTheDocument();
  });
  test("入力すると、画面に反映されること", () => {
    render(<RegistrationForm />);

    const userName = screen.getByLabelText("ユーザー名") as HTMLInputElement;
    fireEvent.change(userName, { target: { value: "テスト男" } });
    expect(userName.value).toBe("テスト男");
  });
});

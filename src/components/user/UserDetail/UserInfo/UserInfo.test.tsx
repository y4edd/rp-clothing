import { render, screen } from "@testing-library/react";
import UserInfo from "./UserInfo";

describe("UserDetail/UserInfo", () => {
  test("各ユーザ情報のタイトルが表示されている", () => {
    render(<UserInfo />);
    const userName = screen.getByText("ユーザ名");
    const mailAddress = screen.getByText("メールアドレス");
    const birthday = screen.getByText("生年月日");
    const password = screen.getByText("パスワード");
    expect(userName).toBeInTheDocument();
    expect(mailAddress).toBeInTheDocument();
    expect(birthday).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
});

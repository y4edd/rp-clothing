import { render, screen } from "@testing-library/react";
import UserInfo from "./UserInfo";

// getTokenFromCookieをモック化
jest.mock("@/utils/cookie", () => ({
  getTokenFromCookie: jest.fn().mockImplementation(() => "349459435"),
}))

// getUserInfoをモック化 
jest.mock("@/utils/apiFunc", () => ({
  getUserInfo: jest.fn().mockImplementation(() => "349459435"),
}))


describe("UserDetail/UserInfo", () => {
  test("各ユーザ情報のタイトルが表示されている", async() => {
    const result = await UserInfo();
    render(result);
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

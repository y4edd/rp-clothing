import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { useRouter } from "next/navigation";
import Login from "./page";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("ログイン画面のテスト", () => {
  test("各コンポーネントがレンダリングされていること", () => {
    render(<Login />);
    const button = screen.getByRole("button", { name: "ログイン" });
    expect(button).toBeInTheDocument();
    expect(screen.getByText("初めてのお客様")).toBeInTheDocument();
  });
});

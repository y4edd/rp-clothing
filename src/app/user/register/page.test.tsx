import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import Register from "./page";

jest.mock("@/components/user/Register/RegisterForm", () => {
  return jest.fn(() => <div>Mocked RegistrationForm</div>);
});

describe("Registerページのテスト", () => {
  test("RegistrationFormコンポーネントがレンダリングされていること", () => {
    render(<Register />);
    expect(screen.getByText("Mocked RegistrationForm")).toBeInTheDocument();
  });
});

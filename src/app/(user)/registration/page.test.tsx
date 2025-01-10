import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import Registration from "./page";

jest.mock("@/components/user/registration/registrationForm", () => {
  return jest.fn(() => <div>Mocked RegistrationForm</div>);
});

describe("Registrationページのテスト", () => {
  test("RegistrationFormコンポーネントがレンダリングされていること", () => {
    render(<Registration />);
    expect(screen.getByText("Mocked RegistrationForm")).toBeInTheDocument();
  });
});

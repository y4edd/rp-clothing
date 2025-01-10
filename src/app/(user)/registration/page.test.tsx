import { describe } from "node:test";
import Registration from "./page";
import { render, screen } from "@testing-library/react";

describe("Registrationページのテスト", () => {
  test("RegistrationFormコンポーネントがレンダリングされていること", () => {
    render(<Registration />);
    expect(screen.getByRole("form")).toBeInTheDocument();
  });
});

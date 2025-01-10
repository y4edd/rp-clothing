import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import Birthday from "./birthday";

describe("BirthDayコンポーネントのテスト", () => {
  test("入力例が明記されていること", () => {
    render(<Birthday setFormArray={() => {}} name="birthday" />);
    expect(screen.getByText(/※後から変更はできません！/)).toBeInTheDocument();
    expect(
      screen.getByText(/お間違い無いようにご注意ください/)
    ).toBeInTheDocument();
  });
});

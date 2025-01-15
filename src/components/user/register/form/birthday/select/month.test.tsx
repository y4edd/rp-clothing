import { fireEvent, render, screen } from "@testing-library/react";
import Month from "./Month";

describe("Monthコンポーネントのテスト", () => {
  test("1~12の選択肢が表示されているか", () => {
    const register = jest.fn();
    render(<Month register={register} />);
    for (let i = 1; i <= 12; i++) {
      expect(
        screen.getByRole("option", { name: i.toString() })
      ).toBeInTheDocument();
    }
  });
});

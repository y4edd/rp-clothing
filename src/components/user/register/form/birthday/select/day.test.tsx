import { render, screen } from "@testing-library/react";
import Day from "./Day";

describe("Dayコンポーネントのテスト", () => {
  test("1から31までの選択肢が表示されること", () => {
    const register = jest.fn();
    render(<Day register={register} />);
    for (let i = 1; i <= 31; i++) {
      expect(
        screen.getByRole("option", { name: i.toString() })
      ).toBeInTheDocument();
    }
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import Day from "./day";

describe("Dayコンポーネントのテスト", () => {
  test("1から31までの選択肢が表示されること", () => {
    const setDay = jest.fn();
    render(<Day day="15" setDay={setDay} />);
    for (let i = 1; i <= 31; i++) {
      expect(screen.getByRole("option", { name: i.toString() })).toBeInTheDocument();
    }
  });

  test("日付が選択されたとき、setDayが呼ばれること", () => {
    const setDay = jest.fn();
    render(<Day day="15" setDay={setDay} />);

    const select = screen.getByLabelText("日");
    fireEvent.change(select, { target: { value: "20" } });

    expect(setDay).toHaveBeenCalledWith("20");
  });
});

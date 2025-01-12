import { fireEvent, render, screen } from "@testing-library/react";
import Month from "./month";

describe("Monthコンポーネントのテスト", () => {
  test("1~12の選択肢が表示されているか", () => {
    const setMonth = jest.fn();
    render(<Month month="" setMonth={setMonth} />);
    for (let i = 1; i <= 12; i++) {
      expect(
        screen.getByRole("option", { name: i.toString() })
      ).toBeInTheDocument();
    }
  });
  test("日付が選択されたとき、setDayが呼ばれること", () => {
    const setMonth = jest.fn();
    render(<Month month="" setMonth={setMonth} />);
    const select = screen.getByLabelText("月");

    fireEvent.change(select, { target: { value: "1" } });

    expect(setMonth).toHaveBeenCalledWith("1");
  });

  test("dayプロパティが空の場合、現在の日付がデフォルトで選択されること", () => {
    const setMonth = jest.fn();
    const today = new Date().getMonth() + 1;
    render(<Month month="" setMonth={setMonth} />);

    const select = screen.getByLabelText("月") as HTMLSelectElement;
    expect(select.value).toBe(today.toString());
  });
});

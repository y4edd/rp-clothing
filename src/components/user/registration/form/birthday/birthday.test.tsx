import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import Birthday from "./birthday";

const setYear = jest.fn();
const setMonth = jest.fn();
const setDay = jest.fn();

describe("BirthDayコンポーネントのテスト", () => {
  test("入力例が明記されていること", () => {
    render(
      <Birthday year="" month="" day="" setYear={setYear} setMonth={setMonth} setDay={setDay} />,
    );
    expect(screen.getByText(/※後から変更はできません！/)).toBeInTheDocument();
    expect(screen.getByText(/お間違い無いようにご注意ください/)).toBeInTheDocument();
  });
  test("各コンポーネントが正しくレンダリングされていること", () => {
    render(
      <Birthday year="" month="" day="" setYear={setYear} setMonth={setMonth} setDay={setDay} />,
    );
    expect(screen.getByText("年")).toBeInTheDocument();
    expect(screen.getByText("月")).toBeInTheDocument();
    expect(screen.getByText("日")).toBeInTheDocument();
  });
  test("propsを正しく渡しているかどうか", () => {
    const today = new Date().getFullYear().toString();
    const setYear = jest.fn();
    const setMonth = jest.fn();
    const setDay = jest.fn();

    render(
      <Birthday
        year={today}
        month="1"
        day="1"
        setYear={setYear}
        setMonth={setMonth}
        setDay={setDay}
      />,
    );
    const selectYear = screen.getByTestId("year-select") as HTMLSelectElement;
    const selectMonth = screen.getByTestId("month-select") as HTMLSelectElement;
    const selectDay = screen.getByTestId("day-select") as HTMLSelectElement;

    expect(selectYear.value).toBe(today);
    expect(selectMonth.value).toBe("1");
    expect(selectDay.value).toBe("1");
  });
});

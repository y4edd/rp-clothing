import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import Birthday from "./Birthday";

const register = jest.fn();

describe("BirthDayコンポーネントのテスト", () => {
  test("入力例が明記されていること", () => {
    render(<Birthday register={register} />);
    expect(screen.getByText(/※後から変更はできません！/)).toBeInTheDocument();
    expect(screen.getByText(/お間違い無いようにご注意ください/)).toBeInTheDocument();
  });
  test("各コンポーネントが正しくレンダリングされていること", () => {
    render(<Birthday register={register} />);
    expect(screen.getByText("年")).toBeInTheDocument();
    expect(screen.getByText("月")).toBeInTheDocument();
    expect(screen.getByText("日")).toBeInTheDocument();
  });
  test("propsを正しく渡しているかどうか", () => {
    const today = new Date().getFullYear().toString();

    render(<Birthday register={register} />);
    const selectYear = screen.getByTestId("year-select") as HTMLSelectElement;
    const selectMonth = screen.getByTestId("month-select") as HTMLSelectElement;
    const selectDay = screen.getByTestId("day-select") as HTMLSelectElement;

    expect(selectYear.value).toBe(today);
    expect(selectMonth.value).toBe("1");
    expect(selectDay.value).toBe("1");
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import Year from "./year";

describe("Monthコンポーネントのテスト", () => {
  test("1~12の選択肢が表示されているか", () => {
    const register = jest.fn();
    const today = new Date();
    const currentYear = today.getFullYear();
    render(<Year register={register} />);
    for (let i = currentYear; i > currentYear - 100; i--) {
      expect(screen.getByRole("option", { name: i.toString() }));
    }
  });

  test("dayプロパティが空の場合、現在の日付がデフォルトで選択されること", () => {
    const register = jest.fn();
    const today = new Date().getFullYear();
    render(<Year register={register} />);

    const select = screen.getByLabelText("年") as HTMLSelectElement;
    expect(select.value).toBe(today.toString());
  });
});

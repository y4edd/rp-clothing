// FIXME: テスト用の実装です。削除して開発に着手してください
import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "./Form";

test("名前を表示すること", () => {
  render(<Form name="john" />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("ボタンをクリックすると、イベントハンドラーが呼ばれること", () => {
  const mockFn = jest.fn();
  render(<Form name="john" onSubmit={mockFn} />);
  fireEvent.click(screen.getByRole("button"));
  expect(mockFn).toHaveBeenCalled();
});

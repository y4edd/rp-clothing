// FIXME: テスト用の実装です。削除して開発に着手してください
import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "./Form";

test("名前を表示すること", () => {
  render(<Form name="john" />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

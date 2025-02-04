import { fireEvent, render, screen } from "@testing-library/react";
import UserEditButtons from "./UserEditButtons";

describe("UserEditButtonsコンポーネントのテスト", () => {
  test("buttonとlinkが存在することを確認", () => {
    render(<UserEditButtons />);
    const button = screen.getByRole("button", { name: "更新する" });
    const link = screen.getByRole("link", { name: "戻る" });
    expect(button).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import UserLinkButtons from "./UserLinkButtons";

describe("UserLinkButtonsコンポーネントのテスト", () => {
  test("linkが２つ存在することを確認", () => {
    render(<UserLinkButtons />);
    const backPageLink = screen.getByRole("link", { name: "戻る" });
    const toEditPageLink = screen.getByRole("link", { name: "編集する" });
    expect(backPageLink).toBeInTheDocument();
    expect(toEditPageLink).toBeInTheDocument();
    screen.debug();
  });
  test("aタグのリンク先パスが正しいことを確認", () => {
    render(<UserLinkButtons />);
    const backPageLink = screen.getByRole("link", { name: "戻る" });
    const toEditPageLink = screen.getByRole("link", { name: "編集する" });
    expect(backPageLink).toHaveAttribute("href", "/mypage");
    expect(toEditPageLink).toHaveAttribute("href", "/user/edit");
  });
});

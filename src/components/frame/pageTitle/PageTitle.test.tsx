import { render } from "@testing-library/react";
import PageTitle from "./PageTitle";

describe("PageTitleコンポーネントのテスト", () => {
  test("propsとして受け取ったtitleが表示されること", () => {
    const screen = render(<PageTitle title="テストタイトル" />);
    expect(screen.getByText("テストタイトル")).toBeInTheDocument();
  });
});

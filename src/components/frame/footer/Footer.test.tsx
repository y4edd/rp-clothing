import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footerコンポーネントのテスト", () => {
  test("「株式会社ソニック」が表示されること", () => {
    const screen = render(<Footer />);
    expect(screen.getByText("©株式会社ソニック")).toBeInTheDocument();
  })
});

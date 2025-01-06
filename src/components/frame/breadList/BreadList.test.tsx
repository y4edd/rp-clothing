import { render, screen } from "@testing-library/react";
import BreadList from "./BreadList";

describe("BreadList コンポーネントの単体テスト", () => {
  const mockBread = [
    { link: "/home", title: "Home" },
    { link: "/about", title: "About" },
    { link: "/contact", title: "Contact" },
  ];

  test("正常にレンダリングされること", () => {
    render(<BreadList bread={mockBread} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  test("リンクの数が正しいこと", () => {
    render(<BreadList bread={mockBread} />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(mockBread.length);
  });

  test("各リンクに正しい href 属性が設定されていること", () => {
    render(<BreadList bread={mockBread} />);
    mockBread.map((item) => {
      const linkElement = screen.getByText(item.title);
      expect(linkElement.closest("a")).toHaveAttribute("href", item.link);
    });
  });

  test("各タイトルが正しく表示されていること", () => {
    render(<BreadList bread={mockBread} />);
    mockBread.map((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  test("最後の要素以外で区切り記号（>）が表示されていること", () => {
    render(<BreadList bread={mockBread} />);
    const separators = screen.getAllByText(">");
    expect(separators.length).toBe(mockBread.length - 1);
  });

  test("最後の要素には区切り記号（>）が表示されないこと", () => {
    render(<BreadList bread={mockBread} />);
    const lastItem = screen.getByText(mockBread[mockBread.length - 1].title);
    expect(lastItem.nextSibling?.textContent).not.toBe(">");
  });
});

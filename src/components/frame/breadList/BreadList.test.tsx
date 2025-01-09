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
});

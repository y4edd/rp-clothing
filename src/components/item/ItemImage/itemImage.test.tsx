import { render, screen } from "@testing-library/react";
import ItemImage from "./ItemImage";

jest.mock("@/components/top/FavoriteButton/FavoriteButton", () => () => <div>FavoriteButton</div>);
describe("ItemImageコンポーネントのテスト", () => {
  const mockImagePath = "/testPath";

  test("propsで渡された値がimgに適応されているか", () => {
    render(<ItemImage itemImage={mockImagePath} />);
    screen.debug();
    const imgElem = screen.getByAltText("アイテム画像");
    expect(imgElem).toHaveAttribute("src", "/testPath");
  });
});

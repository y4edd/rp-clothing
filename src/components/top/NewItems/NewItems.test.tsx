import { render, screen } from "@testing-library/react";
import NewItems from "./NewItems";

describe("NewItemsのテスト", () => {
  test("新着アイテムが表示されている", () => {
    render(<NewItems />);
    const element = screen.getByText("新着アイテム");
    screen.debug();
    expect(element).toBeInTheDocument();
  });
});

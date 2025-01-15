import { render, screen } from "@testing-library/react";
import NewItems from "./NewItems";


jest.mock("../Item/Item", () =>()=> <div>Mocked Item</div>);
describe("NewItemsコンポーネントのテスト", () => {
  const mockItemData = [
    { itemName: "Item 1", itemCode: "001", imageUrl: "/", itemPrice: 1000 },
    { itemName: "Item 2", itemCode: "002", imageUrl: "/", itemPrice: 2000 },
  ];

  test("正常にUIが表示されることを確認", () => {
    render(<NewItems newItems={mockItemData} />);
    const titleText = screen.getByText("新着アイテム");

    expect(titleText).toBeInTheDocument();
  });
});

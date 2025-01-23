import { fireEvent, render, screen } from "@testing-library/react";
import ItemDescription from "./ItemDescription";

describe("ItemDescriptionコンポーネントのテスト", () => {
  const mock_description = ["テキスト", "テキスト", "テキスト"];

  test("propsで渡された配列型のdescriptionが正常に画面に表示されるか", () => {
    render(<ItemDescription description={mock_description} />);

    const titleText = screen.getAllByText("テキスト");
    expect(titleText).toHaveLength(3);
  });
  test("descriptionの配列の大きさが7以下の時ボタンが表示されないことを確認", () => {
    render(<ItemDescription description={mock_description} />);
    const btnElem = screen.queryByRole("button");
    expect(btnElem).toBeNull();
  });
  test("descriptionの配列の大きさが7より大きい時ボタンが表示されることを確認", () => {
    const mock_description = ["テキスト", "テキスト", "テキスト", "テキスト", "テキスト", "テキスト", "テキスト", "テキスト"];
    render(<ItemDescription description={mock_description} />);
    const btnElem = screen.queryByRole("button");
    expect(btnElem).toBeInTheDocument();
  });
  test('descriptionが7より大きい時、初期画面に7つの要素に成形されたものが表示されることを確認',()=>{
    const mock_description = ["テキスト", "テキスト", "テキスト", "テキスト", "テキスト", "テキスト", "テキスト", "テキスト"];
    render(<ItemDescription description={mock_description} />);
    const textLength = screen.getAllByText("テキスト")
    expect(textLength.length).toBe(7)
  })
  test("Moreボタンを押したときに表示されるテキストの長さとCloseボタンに正常に変わるか", () => {
    const mock_description = ["テキスト", "テキスト", "テキスト", "テキスト", "テキスト", "テキスト", "テキスト", "テキスト"];
    render(<ItemDescription description={mock_description} />);
    
    const btnElem = screen.getByText("More");
    expect(btnElem).toBeInTheDocument();

    fireEvent.click(btnElem)
    const textLength = screen.getAllByText("テキスト")
    const btnText = screen.getByText("Close")

    expect(textLength.length).toBe(8)
    expect(btnText).toBeInTheDocument()
  });
});

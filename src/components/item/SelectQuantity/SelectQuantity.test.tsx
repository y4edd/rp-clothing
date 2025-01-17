import { render, screen } from "@testing-library/react";
import SelectQuantity from "./SelectQuantity";

describe("SelectQuantityコンポーネントのテスト", () => {
  test("正常に表示されることを確認", () => {
    render(<SelectQuantity />);
    const textElem = screen.getByText("数量 :");
    const btnElem = screen.getByRole("button");
    expect(textElem).toBeInTheDocument();
    expect(btnElem).toBeInTheDocument();
  });
  test("selectのoptionが10個あることを確認", () => {
    render(<SelectQuantity />);
    const optionElem = screen.getAllByRole("option");
    screen.debug();
    expect(optionElem.length).toBe(10);
  });
});

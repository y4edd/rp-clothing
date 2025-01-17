import { fireEvent, render, screen } from "@testing-library/react";
import PriceCondition from "./PriceCondition";

describe("PriceConditionコンポーネント", () => {
  const mockDispatch = jest.fn();

  const initialProps = {
    minPrice: ""
    maxPrice: "",
    dispatch: mockDispatch,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("初期値が正しく表示される", () => {
    render(<PriceCondition {...initialProps} />);
    expect(screen.getByText("値段")).toBeInTheDocument;
  });

  test("minPriceを変更したときにdispatchが呼び出される", () => {
    render(<PriceCondition {...initialProps} />);

    const minPriceInput = screen.getByTestId("minPrice");

    fireEvent.change(minPriceInput, { target: { value: "2000" } });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "SET_MIN_PRICE",
      payload: "2000",
    });
  });

  test("maxPriceを変更したときにdispatchが呼び出される", () => {
    render(<PriceCondition {...initialProps} />);

    const maxPriceInput = screen.getByTestId("maxPrice");

    fireEvent.change(maxPriceInput, { target: { value: "7000" } });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "SET_MAX_PRICE",
      payload: "7000",
    });
  });
});

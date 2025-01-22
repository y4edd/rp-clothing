import { fireEvent, render, screen } from "@testing-library/react";
import KeyWordCondition from "./KeyWordCondition";

describe("KeyWordConditionコンポーネント", () => {
  const mockDispatch = jest.fn();

  const initialProps = {
    keyWord: "",
    dispatch: mockDispatch,
  };

  test("キーワードを入力するフォームが正しくレンダリングされていること", () => {
    render(<KeyWordCondition {...initialProps} />);

    const title = screen.getByText("キーワード");
    expect(title).toBeInTheDocument();
  });

  test("keyWordを変更したときにdispatchが呼び出される", () => {
    render(<KeyWordCondition {...initialProps} />);

    const keyWordInput = screen.getByTestId("keyWord");

    fireEvent.change(keyWordInput, { target: { value: "パーカー" } });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "SET_KEYWORD",
      payload: "パーカー",
    });
  });
});

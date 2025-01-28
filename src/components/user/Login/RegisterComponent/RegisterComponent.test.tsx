import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { useRouter } from "next/navigation";
import RegisterComponent from "./RegisterComponent";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("RegisterComponentコンポーネント", () => {
  test("テキストが表示されていること", () => {
    render(<RegisterComponent />);
    expect(screen.getByText("初めてのお客様")).toBeInTheDocument();
  });
  test("RegisterDetailsコンポーネントが表示されていること", () => {
    render(<RegisterComponent />);
    expect(screen.getByText("こちらから登録にお進みください。")).toBeInTheDocument();
  });
  test("Buttonコンポーネントが表示されていること", () => {
    render(<RegisterComponent />);
    expect(screen.getByText("新規会員登録（無料）")).toBeInTheDocument();
  });
  test("ボタンを押すと、ログイン画面に遷移すること", () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    render(<RegisterComponent />);

    const button = screen.getByText("新規会員登録（無料）");
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith("/user/register");
  });
});

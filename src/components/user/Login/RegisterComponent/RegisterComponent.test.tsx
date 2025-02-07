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
});

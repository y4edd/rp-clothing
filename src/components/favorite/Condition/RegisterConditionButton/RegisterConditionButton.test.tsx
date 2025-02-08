import { render, screen } from "@testing-library/react";
import RegisterConditionButton from "./RegisterConditionButton";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const pushMock = jest.fn();
(useRouter as jest.Mock).mockReturnValue({
  push: pushMock,
});

describe("RegisterConditionButtonコンポーネントのテスト", () => {
  test("コンポーネントが正常に描画されること", () => {
    render(<RegisterConditionButton />);

    const text = screen.getByText("お気に入り条件を登録する");

    expect(text).toBeInTheDocument();
  });
});

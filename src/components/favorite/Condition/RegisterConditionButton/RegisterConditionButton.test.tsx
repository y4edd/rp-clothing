import { render, screen } from "@testing-library/react";
import RegisterConditionButton from "./RegisterConditionButton";

describe("RegisterConditionButtonコンポーネントのテスト", () => {
  test("コンポーネントが正常に描画されること", () => {
    render(<RegisterConditionButton />);

    const text = screen.getByText("お気に入り条件を登録する");

    expect(text).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import RegisterDetails from "./RegisterDetails";

describe("RegisterDetailsコンポーネントのテスト", () => {
  test("テキストが表示されているか", () => {
    render(<RegisterDetails />);
    const text = screen.getByText("会員登録がお済みでない方は、");
    expect(text).toBeInTheDocument();
  });
});

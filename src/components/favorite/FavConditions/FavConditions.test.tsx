import { render, screen } from "@testing-library/react";
import FavConditions from "./FavConditions";

describe("FavConditionsコンポーネントのテスト", () => {
  test("コンポーネントが正常に表示されること", () => {
    render(<FavConditions />);

    const text = screen.getByText("ビンテージ市場");

    expect(text).toBeInTheDocument();
  });
});

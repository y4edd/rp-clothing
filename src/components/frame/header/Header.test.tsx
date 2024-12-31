import { render } from "@testing-library/react";
import Header from "./Header";

describe("Headerコンポーネントのテスト", () => {
  test("Headerコンポーネントが正しくレンダリングされること", () => {
    render(<Header />);
  });
});

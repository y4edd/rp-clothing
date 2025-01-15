import { render } from "@testing-library/react";
import Header from "./Header";

jest.mock("next/navigation", () => ({ useRouter: jest.fn() }));

describe("Headerコンポーネントのテスト", () => {
  test("Headerコンポーネントが正しくレンダリングされること", () => {
    render(<Header />);
  });
});

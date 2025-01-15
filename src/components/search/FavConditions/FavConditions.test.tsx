import { render, screen } from "@testing-library/react";
import FavConditions from "./FavConditions";

jest.mock("next/navigation", () => ({ useRouter: jest.fn() }));
describe("FavConditionsコンポーネント", () => {
  test("タイトルが正しくレンダリングされていること", () => {
    render(<FavConditions />);

    const title = screen.getByText("お気に入り条件");
    expect(title).toBeInTheDocument();
  });
});

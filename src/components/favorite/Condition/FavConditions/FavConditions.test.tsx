import { render, screen } from "@testing-library/react";
import FavConditions from "./FavConditions";

describe("FavConditionsコンポーネントのテスト", () => {
  test("コンポーネントが正常に表示されること", () => {
    render(<FavConditions />);
  });
});

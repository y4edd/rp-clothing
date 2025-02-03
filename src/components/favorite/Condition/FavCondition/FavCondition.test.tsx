import { render } from "@testing-library/react";
import FavCondition from "./FavCondition";

describe("FavConditionコンポーネントのテスト", () => {
  test("コンポーネントが正常に表示されること", () => {
    render(
      <FavCondition
        name="テスト"
        minPrice="0"
        maxPrice="4000"
        category="Tシャツ"
        keyWord="新品間違いなし"
      />,
    );

    const text = "テスト";
    expect(text).toBeInTheDocument;
  });
});

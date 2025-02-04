import { render } from "@testing-library/react";
import ConditionEditButtons from "./ConditionEditButtons";

describe("ConditionEditButtonsコンポーネントのテスト", () => {
  test("コンポーネントが正常に表示されること", () => {
    render(<ConditionEditButtons />);

    const text = "編集";
    expect(text).toBeInTheDocument;
  });
});

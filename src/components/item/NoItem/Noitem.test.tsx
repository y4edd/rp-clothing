import { render, screen } from "@testing-library/react";
import NoItem from "./NoItem";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));
describe("NoItemコンポーネントのテスト", () => {
  test("テキストが正常に表示されているか", () => {
    render(<NoItem />);
    const text1 = screen.getByText("アイテム情報を取得できませんでした。");
    const text2 = screen.getByText(
      "下記ボタンよりもう一度試すか、前のページのお戻りください。"
    );

    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });
  test("buttonが二つあることを確認", () => {
    render(<NoItem />);
    const buttons = screen.getAllByRole("button");
    const expectedTexts = ["もう一度試す", "前のページへ戻る"];
    buttons.forEach((button, index) => {
      expect(button).toHaveTextContent(expectedTexts[index]);
    });
    expect(buttons.length).toBe(2);
  });
});

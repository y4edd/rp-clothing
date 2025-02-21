import { render, screen } from "@testing-library/react";
import ConditionEditButtons from "./ConditionEditButtons";

// next/linkをモック化し、href属性を持つ<a>として扱う。
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("ConditionEditButtonsコンポーネントのテスト", () => {
  const conditionMock = {
    searchConditionId: 47,
    conditionName: "566",
    minPrice: "4000",
  };

  test("コンポーネントが正常に表示されること", () => {
    render(<ConditionEditButtons condition={conditionMock} />);

    expect(screen.getByText("編集")).toBeInTheDocument();
    expect(screen.getByText("削除")).toBeInTheDocument();
  });

  test("編集ボタン押下で、正しいURLにリンクされていること", async () => {
    render(<ConditionEditButtons condition={conditionMock} />);

    const editLink = screen.getByRole("link", { name: "編集" });

    const expectedUrl =
      "/mypage/search/condition/edit?searchConditionId=47&conditionName=566&minPrice=4000";

    expect(editLink).toHaveAttribute("href", expectedUrl);
  });

  test("削除ボタン押下で、正しいURLにリンクされていること", async () => {
    render(<ConditionEditButtons condition={conditionMock} />);

    const deleteLink = screen.getByRole("link", { name: "削除" });

    const expectedUrl =
      "/mypage/search/condition/delete?searchConditionId=47&conditionName=566&minPrice=4000";

    expect(deleteLink).toHaveAttribute("href", expectedUrl);
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import ConditionEditButtons from "./ConditionEditButtons";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const pushMock = jest.fn();
(useRouter as jest.Mock).mockReturnValue({
  push: pushMock,
});

const conditionMock = {
  searchConditionId: 47,
  conditionName: "566",
  minPrice: "4000",
};

describe("ConditionEditButtonsコンポーネントのテスト", () => {
  test("コンポーネントが正常に表示されること", () => {
    render(<ConditionEditButtons condition={conditionMock} />);

    expect(screen.getByText("編集")).toBeInTheDocument();
    expect(screen.getByText("削除")).toBeInTheDocument();
  });

  test("編集ボタン押下で、ページ遷移が行われること", () => {
    render(<ConditionEditButtons condition={conditionMock} />);

    const editButtons = screen.getByRole("button", { name: "編集"});
    fireEvent.click(editButtons);

    // URLをエンコードして比較する
    const expectedUrl = "/mypage/searchCondition/edit?searchConditionId=47&conditionName=566&minPrice=4000"
    const actualUrl = pushMock.mock.calls[0][0];

    expect(decodeURIComponent(actualUrl)).toBe(expectedUrl);
  });

  test("削除ボタン押下で、ページ遷移が行われること", () => {
    render(<ConditionEditButtons condition={conditionMock} />);

    const deleteButtons = screen.getByRole("button", { name: "削除"});
    fireEvent.click(deleteButtons);

    // URLをエンコードして比較する
    const expectedUrl = "/mypage/searchCondition/delete?searchConditionId=47&conditionName=566&minPrice=4000"
    const actualUrl = pushMock.mock.calls[0][0];

    expect(decodeURIComponent(actualUrl)).toBe(expectedUrl);
  })

});

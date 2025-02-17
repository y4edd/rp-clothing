import { deleteUser } from "@/utils/apiFunc";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import DeleteButtons from "./DeleteButtons";

// モックを作成
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/utils/apiFunc", () => ({
  deleteUser: jest.fn(),
}));

jest.mock("@/components/utils/toast/toast", () => ({
  showToast: jest.fn(),
  showErrorToast: jest.fn(),
}));

describe("DeleteButtonsコンポーネントのテスト", () => {
  let mockRouterPush: jest.Mock;

  beforeEach(() => {
    mockRouterPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockRouterPush });
  });

  test("削除ボタンとキャンセルボタンが存在することを確認", () => {
    const mockSetIsDeleteModal = jest.fn();
    render(<DeleteButtons setIsDeleteModal={mockSetIsDeleteModal} />);

    const deleteButton = screen.getByRole("button", { name: "削除する" });
    const cancelButton = screen.getByRole("button", { name: "キャンセル" });

    expect(deleteButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  test("キャンセルボタンが押されたとき、setIsDeleteModal(false) が呼ばれる", () => {
    const setIsDeleteModal = jest.fn();
    render(<DeleteButtons setIsDeleteModal={setIsDeleteModal} />);

    const cancelButton = screen.getByRole("button", { name: "キャンセル" });
    fireEvent.click(cancelButton);

    expect(setIsDeleteModal).toHaveBeenCalledWith(false);
  });

  test("削除ボタンを押すと、アカウント削除APIが呼ばれる", async () => {
    (deleteUser as jest.Mock).mockResolvedValue({ ok: true });

    render(<DeleteButtons setIsDeleteModal={jest.fn()} />);

    const deleteButton = screen.getByRole("button", { name: "削除する" });
    fireEvent.click(deleteButton);

    expect(deleteUser).toHaveBeenCalled();
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import DeleteButtons from "./DeleteButtons";

describe("DeleteButtonsコンポーネントのテスト", () => {
  test("buttonが２つ存在することを確認", () => {
    const mockSetIsDeleteModal = jest.fn();
    render(<DeleteButtons setIsDeleteModal={mockSetIsDeleteModal} />);
    const okButton = screen.getByText("削除する");
    const cancelButton = screen.getByText("キャンセル");
    expect(okButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  test("キャンセルボタンが押されたとき関数が呼び出されることを確認", () => {
    const setIsDeleteModal = jest.fn();
    render(<DeleteButtons setIsDeleteModal={setIsDeleteModal} />);
    const cancelButton = screen.getByText("キャンセル");
    fireEvent.click(cancelButton);

    expect(setIsDeleteModal).toHaveBeenCalledWith(false);
  });
});

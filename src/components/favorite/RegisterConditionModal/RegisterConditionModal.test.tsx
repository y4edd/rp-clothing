import { render, screen } from "@testing-library/react";
import RegisterConditionModal from "./RegisterConditionModal";

describe("RegisterConditionModalコンポーネントのテスト", () => {
  test("コンポーネントが正常に表示されること", () => {
    const closeModalMock = jest.fn();
    const setIsModalOpenMock = jest.fn();
    render(<RegisterConditionModal closeModal={closeModalMock} setIsModalOpen={setIsModalOpenMock} />);

    const title = screen.getByRole("heading", { name: "お気に入り条件登録"});
    expect(title).toBeInTheDocument();
  });

})
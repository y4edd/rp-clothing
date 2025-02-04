import { render, screen } from "@testing-library/react";
import AccountDeleteModal from "./AccountDeleteModal";

jest.mock("./DeleteConfirmText/DeleteConfirmText", () => () => <div>DeleteConfirmText</div>);
jest.mock("./DeleteDataList/DeleteDataList", () => () => <div>DeleteDataList</div>);
jest.mock("./DeleteButtons/DeleteButtons", () => () => <div>DeleteButtons</div>);

const mockFunc = jest.fn();

describe("AccountDeleteModalのテスト", () => {
  test("子コンポーネントが存在するか", () => {
    render(<AccountDeleteModal setIsDeleteModal={mockFunc} />);
    expect(screen.getByText("DeleteConfirmText")).toBeInTheDocument();
    expect(screen.getByText("DeleteDataList")).toBeInTheDocument();
    expect(screen.getByText("DeleteButtons")).toBeInTheDocument();
  });
});

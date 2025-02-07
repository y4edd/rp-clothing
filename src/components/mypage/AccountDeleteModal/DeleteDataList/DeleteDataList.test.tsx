import { render, screen } from "@testing-library/react";
import DeleteDataList from "./DeleteDataList";

describe("DeleteDataListコンポーネントのテスト", () => {
  test("リストが正しく表示されていること", () => {
    render(<DeleteDataList />);
    screen.debug();
    const list1 = screen.getByText("購入履歴");
    const list2 = screen.getByText("カート情報");
    const list3 = screen.getByText("お気に入り情報");
    const list4 = screen.getByText("ユーザー情報");
    const list5 = screen.getByText("閲覧履歴");
    expect(list1).toBeInTheDocument();
    expect(list2).toBeInTheDocument();
    expect(list3).toBeInTheDocument();
    expect(list4).toBeInTheDocument();
    expect(list5).toBeInTheDocument();
  });
});

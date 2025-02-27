import type { History } from "@/types/history/history";
import { render, screen } from "@testing-library/react";
import WatchedList from "./WatchedList";

const mockHistories: History[] = [
  {
    itemInfo: {
      itemCode: "1234",
      itemName: "item1",
      itemPrice: 1000,
      mediumImageUrls: [{ imageUrl: "http://example.com" }],
    },
  },
];

describe("WatchedListコンポーネントのテスト", () => {
  test("履歴がない場合、メッセージが表示されることを確認", () => {
    render(<WatchedList histories={[]} />);
    const textElem = screen.getByText("最近チェックしたアイテムがありません");
    expect(textElem).toBeInTheDocument();
  });

  test("履歴がある場合、アイテムが表示されることを確認", () => {
    render(<WatchedList histories={mockHistories} />);
    expect(screen.getByText("item1")).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes("¥ 1,000"))).toBeInTheDocument();
  });
});

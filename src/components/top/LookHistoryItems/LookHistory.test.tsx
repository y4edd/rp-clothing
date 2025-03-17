// test/LookHistory.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import LookHistory from "@/components/top/LookHistoryItems/LookHistory";

// モック関数
import { checkAuth } from "@/utils/checkAuth";
jest.mock("@/utils/checkAuth", () => ({
  checkAuth: jest.fn(),
}));
import { fetchWatched } from "@/utils/fetchWatched";
jest.mock("@/utils/fetchWatched", () => ({
  fetchWatched: jest.fn(),
}));

test("最近チェックしたアイテムが表示されている", async () => {
  const mockHistories = { histories: ["item1", "item2", "item3"] };

  // モック実装
  (checkAuth as jest.Mock).mockResolvedValue("user123");
  (fetchWatched as jest.Mock).mockResolvedValue(mockHistories);

  const result = await LookHistory();
  render(result);

  // 非同期で表示される「最近チェックしたアイテム」を待つ
  await waitFor(() => screen.getByText("最近チェックしたアイテム"));

  // アイテムが表示されることを確認
  expect(screen.getByText("最近チェックしたアイテム")).toBeInTheDocument();
});

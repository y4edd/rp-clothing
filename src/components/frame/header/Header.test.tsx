import { fetchUserId } from "@/utils/apiFunc";
import { render, screen, waitFor } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

// usePathname と useRouter をモック化
jest.mock("next/navigation", () => ({
  usePathname: jest.fn().mockReturnValue("/"),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  })),
}));

// fetchUserId をモック化
jest.mock("@/utils/apiFunc", () => ({
  fetchUserId: jest.fn(),
}));

describe("Header Componentのテスト", () => {
  test("userId が '29'（文字列数字）の場合、マイページリンクが表示される", async () => {
    (fetchUserId as jest.Mock).mockResolvedValueOnce({
      userId: "29",
      error: null,
    });

    render(<Header />);

    await waitFor(() => {
      expect(screen.getByText("マイページ")).toBeInTheDocument();
    });
  });

  test("userId が null の場合、ログインリンクが表示される", async () => {
    (fetchUserId as jest.Mock).mockResolvedValueOnce({
      userId: null,
      error: null,
    });

    render(<Header />);

    await waitFor(() => {
      expect(screen.getByText("ログイン")).toBeInTheDocument();
    });
  });
});

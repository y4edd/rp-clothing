import { redisClient } from "@/lib/redis/redis";
import { getUserInfo } from "@/utils/apiFunc";
import { render, screen, waitFor } from "@testing-library/react";
import UserInfo from "./UserInfo";

// "getTokenFromCookie" をモック化
jest.mock("@/utils/cookie", () => ({
  getTokenFromCookie: jest.fn().mockResolvedValue("349459435"),
}));

// "redisClient" をモック化
jest.mock("@/lib/redis/redis", () => ({
  redisClient: {
    get: jest.fn(),
  },
}));

// "getUserInfo" をモック化
jest.mock("@/utils/apiFunc", () => ({
  getUserInfo: jest.fn(),
}));

describe("UserDetail/UserInfo", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("各ユーザ情報のタイトルが表示されている", async () => {
    // Redis のモックを設定
    (redisClient.get as jest.Mock).mockResolvedValue(JSON.stringify({ userId: "12345" }));

    // API のモックを設定（getUserInfo が返すデータを適切に修正）
    (getUserInfo as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        {
          name: "テストユーザー",
          email: "test@example.com",
          birthday: "1990-01-01",
        },
      ]),
    });

    const result = await UserInfo();
    render(result);

    await waitFor(() => {
      expect(screen.getByText("ユーザ名")).toBeInTheDocument();
      expect(screen.getByText("メールアドレス")).toBeInTheDocument();
      expect(screen.getByText("生年月日")).toBeInTheDocument();
      expect(screen.getByText("パスワード")).toBeInTheDocument();
    });
  });
});

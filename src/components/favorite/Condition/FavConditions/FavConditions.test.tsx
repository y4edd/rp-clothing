import { getCondition } from "@/utils/apiFunc";
import { render, screen, waitFor } from "@testing-library/react";
import FavConditions from "./FavConditions";

// "getCondition" をモックする
jest.mock("@/utils/apiFunc", () => ({
  getCondition: jest.fn(),
}));

describe("FavConditions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("正常にデータを取得し、条件一覧を表示する", async () => {
    const mockData = [
      {
        conditionName: "セール",
        minPrice: 1000,
        maxPrice: 5000,
        selectedCategory: "ファッション",
        keyWord: "割引",
      },
    ];

    // モック関数が成功時のレスポンスを返すよう設定
    (getCondition as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const fav = await FavConditions();
    render(fav);

    // データが表示されるのを待つ
    await waitFor(() => {
      expect(screen.getByText("セール")).toBeInTheDocument();
      expect(screen.getByText("1000〜5000円")).toBeInTheDocument();
      expect(screen.getByText("ファッション")).toBeInTheDocument();
      expect(screen.getByText("割引")).toBeInTheDocument();
    });
  });

  test("API が失敗した場合、エラーメッセージが表示される", async () => {
    (getCondition as jest.Mock).mockResolvedValue({ ok: false });

    const fav = await FavConditions();
    render(fav);

    await waitFor(() => {
      expect(screen.getByText("データの取得に失敗しました。")).toBeInTheDocument();
    });
  });

  test("API が `undefined` を返した場合、エラーメッセージが表示される", async () => {
    (getCondition as jest.Mock).mockResolvedValue(undefined);

    const fav = await FavConditions();
    render(fav);

    await waitFor(() => {
      expect(screen.getByText("データの取得に失敗しました。")).toBeInTheDocument();
    });
  });
});

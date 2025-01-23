import { render, screen } from "@testing-library/react";
import ItemDetail from "./ItemDetail";
import { getItemDetail } from "@/utils/apiFunc";
jest.mock("@/utils/apiFunc", () => ({
  getItemDetail: jest.fn(),
}));
jest.mock("./ItemInfo/ItemInfo", () => () => <div>Mocked ItemInfo</div>);
jest.mock("./ItemDescription/ItemDescription", () => () => (
  <div>Mocked ItemDescription</div>
));
jest.mock("./NoItem/NoItem", () => () => <div>Mocked NoItem</div>);
const mockItemData = {
  itemName: "test",
  itemCode: "0000",
  itemPrice: "2000",
  itemImage: "/testPath",
  itemCaption: "texttexttext",
  shopCode: "shopCode000",
  shopName: "testShop",
  shopUrl: "/shopPath",
};
const mockItemCode = { itemCode: "00000" };
describe("ItemDetailコンポーネントのテスト", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("アイテム詳細のデータを取得成功し子コンポーネントが表示されることを確認", async () => {
    (getItemDetail as jest.Mock).mockResolvedValue(mockItemData);
    render(await ItemDetail(mockItemCode));
    expect(screen.getByText("Mocked ItemInfo")).toBeInTheDocument();
    expect(screen.getByText("Mocked ItemDescription")).toBeInTheDocument();
  });
  test("アイテム詳細データが取得できなかったときNoItemコンポーネントが表示されることを確認", async () => {
    (getItemDetail as jest.Mock).mockResolvedValue(null);
    render(await ItemDetail(mockItemCode));
    expect(screen.getByText("Mocked NoItem")).toBeInTheDocument();
  });
});

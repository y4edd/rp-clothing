import { getNewItems } from "@/utils/apiFunc";

describe("新着アイテムの取得関数のテスト", () => {
  const mockItemData = [
    { itemName: "Item 1", itemCode: "001", imageUrl: "/", itemPrice: 1000 },
    { itemName: "Item 2", itemCode: "002", imageUrl: "/", itemPrice: 2000 },
  ];
  test("正常に商品データを返すとことを確認", async () => {
    global.fetch = jest.fn().mockReturnValueOnce({
      ok: true,
      status: 200,
      json: () => ({ items: mockItemData }),
    });
    const itemData = await getNewItems();
    // console.log(itemData);
    expect(itemData).toBe(mockItemData);
  });
  test("エラー時にnullを返すことを確認", async () => {
    global.fetch = jest.fn().mockReturnValueOnce({
      ok: false,
      status: 500,
    });
    const itemData = await getNewItems();
    // console.log(itemData);
    expect(itemData).toBeNull();
  });
});

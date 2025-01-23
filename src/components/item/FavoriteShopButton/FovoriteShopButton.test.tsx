import { fireEvent, render, screen } from "@testing-library/react";
import FavoriteShopButton from "./FavoriteShopButton";

describe("FavoriteShopButtonコンポーネントのテスト", () => {
  test("正常にbuttonが表示されることを確認", () => {
    render(<FavoriteShopButton />);
    
    const btnElem = screen.getByRole("button");
    expect(btnElem).toBeInTheDocument();
  });
  test('アイコンを押したとき表示が切り替わることを確認',()=>{
    render(<FavoriteShopButton />);

    const btnElem = screen.getByTestId("FavoriteBorderIcon");
    expect(btnElem).toBeInTheDocument()
    
    fireEvent.click(btnElem);
    const afterBtnElem = screen.getByTestId('FavoriteIcon')
    expect(afterBtnElem).toBeInTheDocument()
  })
});

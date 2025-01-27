import PersonIcon from "@mui/icons-material/Person";
import { render, screen } from "@testing-library/react";
import ActionButton from "./ActionButton";

describe("ActionButtonコンポーネントのテスト", () => {
  test("MUIのアイコンが正常に表示されることを確認", () => {
    render(<ActionButton MUIicon={<PersonIcon />} textArray={["text"]} />);

    const MUI = screen.getByTestId("PersonIcon");
    expect(MUI).toBeInTheDocument();

    // textArray.lengthが1の時の表示
    const textElem = screen.getByText("text");
    expect(textElem).toBeInTheDocument();
  });
  test("propsで渡されたtextArray.lengthが2以上の時正常に表示されることを確認", () => {
    render(<ActionButton MUIicon={<PersonIcon />} textArray={["text1", "text2"]} />);

    // textArray.lengthが1の時の表示
    const textElem1 = screen.getByText("text1");
    const textElem2 = screen.getByText("text2");
    expect(textElem1).toBeInTheDocument();
    expect(textElem2).toBeInTheDocument();
  });
});

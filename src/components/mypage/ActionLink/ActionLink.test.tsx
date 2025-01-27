import PersonIcon from "@mui/icons-material/Person";
import { render, screen } from "@testing-library/react";
import ActionLink from "./ActionLink";
jest.mock("../IconWithText/IconWithText", () => () => <div>IconWithText</div>);

describe("ActionButtonコンポーネントのテスト", () => {
  test("buttonタグあることを確認", () => {
    render(<ActionLink linkPath="/" MUIicon={<PersonIcon />} textArray={["text1", "text2"]} />);
    const btnElem = screen.getByRole("link");
    expect(btnElem).toBeInTheDocument();
  });
  test("子コンポーネントが表示されることを確認", () => {
    render(<ActionLink linkPath="/" MUIicon={<PersonIcon />} textArray={["text1", "text2"]} />);
    const component = screen.getByText("IconWithText");
    expect(component).toBeInTheDocument();
  });
});

import PersonIcon from "@mui/icons-material/Person";
import { render, screen } from "@testing-library/react";
import { Just_Another_Hand } from "next/font/google";
import IconWithText from "../IconWithText/IconWithText";
import ActionButton from "./ActionButton";

jest.mock("../IconWithText/IconWithText", () => () => <div>IconWithText</div>);

describe("ActionButtonコンポーネントのテスト", () => {
  test("buttonタグあることを確認", () => {
    render(
      <ActionButton onClick={() => {}} MUIicon={<PersonIcon />} textArray={["text1", "text2"]} />,
    );
    const btnElem = screen.getByRole("button");
    expect(btnElem).toBeInTheDocument();
  });
  test("子コンポーネントが表示されることを確認", () => {
    render(
      <ActionButton onClick={() => {}} MUIicon={<PersonIcon />} textArray={["text1", "text2"]} />,
    );
    const component = screen.getByText("IconWithText");
    expect(component).toBeInTheDocument();
  });
});

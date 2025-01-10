import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import Input from "./input";

describe("Inputコンポーネントのテスト", () => {
  test("入力例が明記されていること", () => {
    render(
      <Input title="ユーザー名" type="text" name="name" text="name" setFormArray={() => {}} />,
    );
    expect(screen.getByText("※例：RP太郎")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import InputField from "./InputField";

describe("InputFieldコンポーネントのテスト", () => {
  test("ラベルと例が正しく表示されることを確認", () => {
    render(
      <InputField id="username" label="ユーザー名" example="山田太郎" errors={""}>
        <input id="username" />
      </InputField>,
    );

    expect(screen.getByLabelText("ユーザー名")).toBeInTheDocument();
    expect(screen.getByText("例 : 山田太郎")).toBeInTheDocument();
  });

  test("エラーメッセージが表示されることを確認", () => {
    render(
      <InputField id="username" label="ユーザー名" example="山田太郎" errors={"※入力必須です"}>
        <input id="username" />
      </InputField>,
    );

    expect(screen.getByText("※入力必須です")).toBeInTheDocument();
  });
});

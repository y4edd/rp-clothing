// FIXME: テスト用の実装です。削除して開発に着手してください
type Props = {
  name: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};
export const Form = ({ name, onSubmit }: Props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.(event);
      }}
    >
      <h2>アカウント情報</h2>
      <p>{name}</p>
      <div>
        <button>編集する</button>
      </div>
    </form>
  );
};

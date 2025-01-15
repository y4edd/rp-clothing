type ButtonProps = {
  type?: "button" | "submit" | "reset";
  onClick?: () => void | ((e?: React.MouseEvent<HTMLButtonElement>) => void);
  className?: string;
  text: string;
};

const Button = ({ type, onClick, className, text }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
